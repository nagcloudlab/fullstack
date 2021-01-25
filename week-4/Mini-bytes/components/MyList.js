import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { Container, Content, Text, List } from 'native-base';
import axios from 'axios'

const MyList = () => {
    const [state, setState] = useState({
        pageNo: 1,
        pageSize: 20,
        showLoadingMore: false,
        data: [],
        loadMoreData: true,//to denote whether bottom of list is reached
        shouldHit: true, //whether more data needs to be fetched
        dataReceived: false, //whether initial data is fetched
    })

    const fetchData = () => {
        if (state.pageNo != 1) {
            //when we try to fetch more data show loader at the bottom
            setState({
                ...state,
                showLoadingMore: true
            })
        }
        var systemIPAddress = 'localhost';
        var url = 'http://' + systemIPAddress + ':3000/fetch-paginated-data?pageNo=' + state.pageNo + '&pageSize=' + state.pageSize;
        console.log(url)
        axios
            .get(url)
            .then(response => {
                if (response.data.success) {
                    //add data to list and change the state to render new content
                    let receivedDataList = response.data.list;
                    let currentDataList = state.data;
                    //append to existing list
                    let newDataList = currentDataList.concat(receivedDataList);
                    //render new list
                    //once new list is set we are ready to load more data if bottom is reached
                    let loadMoreData = true;
                    setState({
                        ...state,
                        pageNo: state.pageNo + 1,
                        data: newDataList,
                        dataReceived: true,
                        loadMoreData: loadMoreData,
                        showLoadingMore: false
                    })
                } else {
                    //no more data to be loaded
                    setState({
                        ...state,
                        shouldHit: false,
                        showLoadingMore: false
                    })
                }
            })
            .catch(error => {
                console.log(error)
            });

    }

    useEffect(() => {
        fetchData()
    }, [])

    const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
        const paddingToBottom = 40;
        let result = layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
        //true if the end is reached other wise false
        return result;
    };


    //initially display loader at the center
    let listSection =
        <View style={styles.container} >
            <ActivityIndicator size="large" color="#0000ff" />
        </View>

    if (state.dataReceived) {
        if (state.data.length > 0) {
            listSection = state
                .data
                .map((record) => {
                    return (
                        <View key={record.index} style={[styles.container, { margin: 10, height: 40, borderWidth: 1, borderColor: 'black' }]}>
                            <Text>{record.index}. {record.data}</Text>
                        </View>
                    );
                })
        } else {
            listSection = null;
        }
    }

    if (state.dataReceived && state.data.length == 0) {
        return (
            <View style={styles.container}>
                <Text>No records to display</Text>
            </View>
        )
    } else {
        return (
            <Container style={{ marginTop: 40 }}>
                <Content
                    onScroll={({ nativeEvent }) => {
                        if (isCloseToBottom(nativeEvent)) {
                            //prevent multiple hits for same page number
                            if (state.loadMoreData) {
                                //bottom reached start loading data
                                setState({
                                    ...state,
                                    loadMoreData: false
                                })
                                fetchData();
                            }

                        }
                    }}>
                    <List>
                        {listSection}
                    </List>
                    {state.showLoadingMore ? <ActivityIndicator size="large" color="#0000ff" /> : null}

                </Content>

            </Container>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MyList;