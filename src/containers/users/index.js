import React, { Component } from 'react';
import {
  FlatList,
  ActivityIndicator,
} from 'react-native';
import GenericContainer from '../../components/GenericContainer';
import SeeMoreButton from '../../components/SeeMoreButton';
import CustomCard from '../../components/CustomCard';
import Header from '../../components/Header';
import Separator from '../../components/Separator';
import fetchApi from '../../services/api';

import styles from './styles';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      data: null,
      refreshing: false,
      loadMoreFailed: false,
      loadMore: false,
      hasReachedEnd: false,
    };
  }

  componentDidMount() {
    this.getDataFromDB();
  }

  onPullRefresh = () => {
    this.setState({ refreshing: true });
  }

  getDataFromDB = async () => {
    const strFixedEndpoint = '/api/users?page=';
    const nextPage = this.state.page + 1;
    const strCurEndpoint = strFixedEndpoint.concat(nextPage);
    await this.setState({ loadMore: true });
    fetchApi(strCurEndpoint)
      .then((res) => {
        this.setState({
          data: res,
          loadMoreFailed: false,
          loadMore: false,
        });
      })
      .catch(() => {
        this.setState({ loadMoreFailed: true });
      });
  }

  seeMore = () => {
    this.setState({ loadMoreFailed: false });
  }

  keyExtractor = item => toString(item.id);

  renderFooter = () => {
    let oView = null;
    if (this.state.loadMoreFailed) {
      oView = <SeeMoreButton onPress={this.seeMore} />;
    } else if (this.state.hasReachedEnd) {
      oView = null;
    } else if (this.state.loadMore) {
      oView = <ActivityIndicator size="small" color="#EEB843" />;
    } else {
      oView = null;
    }

    return oView;
  }

  renderItem = ({ item }) => (
    <CustomCard data={item} />
  );

  renderHeader = () => <Header title="Users" />

  renderSeparator = () => <Separator />

  render() {
    const list = this.state.data ? this.state.data.data : [];
    return (
      <GenericContainer isLoading={this.state.data == null}>
        <FlatList
          refreshing={this.state.refreshing}
          onRefresh={this.onPullRefresh}
          contentContainerStyle={styles.flatlistContainer}
          extraData={this.state.data}
          keyExtractor={this.keyExtractor}
          data={list}
          onEndReached={this.getDataFromDB}
          onEndReachedThreshold={0.5}
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
