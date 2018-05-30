import React, { Component } from 'react';
import {
  FlatList,
  ActivityIndicator,
  Alert,
} from 'react-native';
import GenericContainer from '../../components/GenericContainer';
import CustomButton from '../../components/CustomButton';
import CustomCard from '../../components/CustomCard';
import Header from '../../components/Header';
import Separator from '../../components/Separator';
import CustomBar from '../../components/CustomBar';
import fetchApi from '../../services/api';

import styles from './styles';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      users: [],
      refreshing: false,
      loadMoreFailed: false,
      loadingMore: false,
      hasReachedEnd: false,
    };
  }

  componentDidMount() {
    this.initComponentData();
  }

  onPullRefresh = () => {
    this.setState({
      page: 0,
      refreshing: true,
      loadingMore: true,
    }, () => {
      this.getDataFromDB();
    });
  }

  getDataFromDB = async () => {
    const { users, page } = this.state;
    const strFixedEndpoint = '/api/users?page=';
    const targetPage = page + 1;
    const strCurEndpoint = strFixedEndpoint.concat(targetPage);
    fetchApi(strCurEndpoint)
      .then((res) => {
        this.setState({
          users: targetPage === 1 ? res.data : [...users, ...res.data],
          page: targetPage,
          loadMoreFailed: false,
          loadingMore: false,
          refreshing: false,
          hasReachedEnd: targetPage === res.total_pages,
        });
      })
      .catch(() => {
        this.setState({
          loadingMore: false,
          loadMoreFailed: true,
          refreshing: false,
        });
        this.showLoadMoreFailedMsg();
      });
  }

  initComponentData = () => {
    this.setState({
      loadingMore: true,
    }, () => {
      this.getDataFromDB();
    });
  }

  handleLoadMore = () => {
    const {
      loadMoreFailed,
      loadingMore,
      hasReachedEnd,
      refreshing,
    } = this.state;

    if (!loadingMore && !hasReachedEnd && !refreshing && !loadMoreFailed) {
      this.setState({
        loadingMore: true,
      }, () => {
        this.getDataFromDB();
      });
    }
  }

  seeMore = () => {
    this.setState({
      loadMoreFailed: false,
      loadingMore: true,
    }, () => {
      this.getDataFromDB();
    });
  }

  keyExtractor = item => JSON.stringify(item.id);

  showLoadMoreFailedMsg = () => {
    const strMsg = 'Unabled to load users. Please check your internet connection or try loading again in a minute.';
    Alert.alert(
      "Sorry, We're Having Some Issues",
      strMsg,
      [
        { text: 'OK', onPress: () => {} },
      ],
      { cancelable: false },
    );
  }

  renderItem = ({ item }) => (
    <CustomCard data={item} />
  );

  renderHeader = () => <Header title="Users" />

  renderSeparator = () => <Separator />

  renderFooter = () => {
    const {
      page,
      loadMoreFailed,
      hasReachedEnd,
      loadingMore,
    } = this.state;

    let oView = null;
    if (loadMoreFailed) {
      const strTitle = page === 0 ? 'Reload' : 'See More';
      oView = <CustomButton onPress={this.seeMore} title={strTitle} />;
    } else if (hasReachedEnd) {
      oView = <CustomBar title="End of Results" />;
    } else if (loadingMore) {
      oView = <ActivityIndicator size="large" color="#EEB843" />;
    } else {
      oView = null;
    }

    return oView;
  }

  render() {
    const users = [...this.state.users];
    const { loadingMore } = this.state;
    return (
      <GenericContainer isLoading={false}>
        <FlatList
          refreshing={this.state.refreshing}
          onRefresh={this.onPullRefresh}
          contentContainerStyle={styles.flatlistContainer}
          extraData={loadingMore}
          keyExtractor={this.keyExtractor}
          data={users}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={0.01}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          ItemSeparatorComponent={this.renderSeparator}
          renderItem={this.renderItem}
        />
      </GenericContainer>
    );
  }
}

export default Users;
