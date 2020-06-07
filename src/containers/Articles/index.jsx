import React, { Component } from 'react'
import {getArticles} from '../../requests/index'
import { Card, Tag,Button, Radio , Table} from 'antd'

import moment from 'moment'
const titleDisplayMap={
  id: 'id',
  title: '标题',
  amount: '阅读量',
  author: '作者',
  createAt: '创建时间'
}
export default class ArticleList extends Component {
  constructor(props){
    super(props)
    this.state={
      dataSource: [],
      columns: [],
      total: 0, 
      isLoading: false,
      offset:0,
      limited: 10

    }
  }
  handleDelete=(record)=>{
    console.log(record)
  }
  getData=()=>{
    this.setState({
      isLoading: true
    })
    getArticles(this.state.offset, this.state.limited)
      .then(resp=>{
        const columnKeys = Object.keys(resp.list[0])
        const columns = columnKeys.map(item=>{
          if(item==='amount'){
            return {
              title: titleDisplayMap[item],
              key: item,
              render: (record)=>{
              return <Tag color={record.amount>230?'red':'green'}>{record.amount}</Tag>
              }
  
          }}
          if(item==='createAt'){
            return {
              title: titleDisplayMap[item],
              key: item,
              render: (record)=>{
              return moment(record.createAt).format('YYYY年MM月DD日 HH:mm:ss')
              }
  
          }}
          
          return {
            title: titleDisplayMap[item],
            dataIndex: item,
            key: item,
          }
        })
        columns.push({
          title: '操作',
          key: 'actions',
          render: (record)=>{
            return (
              <Radio.Group>
              <Button type="primary">编辑</Button>
              <Button  type="danger" onClick={(record)=>this.handleDelete(record)}>删除</Button>
            </Radio.Group>
            )
          }
        })
        this.setState({
          dataSource: resp.list,
          columns,
          total: resp.total
        })
      })
      .catch(err=>{
        //处理错误
      })
      .finally(()=>{

        this.setState({
          isLoading: false
        })
      })
  }
  handleOnChange=(page,pageSize)=>{
    console.log(page,pageSize)
    this.setState({
      offset: (page-1)*pageSize,
      limited: pageSize
    },()=>{
      this.getData()
    })
  }
  handleOnSizeChange=(current, size)=>{
    console.log(current, size)
    this.setState({
      offset: 0,
      limited: size
    },()=>{
      this.getData()
    })

  }
  componentDidMount(){
   
    this.getData()
    
  }
  
  render() {
    const {dataSource, total, columns, isLoading} = this.state
    return (
      <Card title="文章列表" extra={<Button>导出excel</Button>} bordered={false}>
        <Table 
          rowKey={record=>record.id}
          dataSource={dataSource}
          columns={columns}
          loading={isLoading}
          pagination={{hideOnSinglePage:true,total,showQuickJumper:true,showSizeChanger: true, onChange:this.handleOnChange, onShowSizeChange: this.handleOnSizeChange}}
        />
      </Card>
    )
  }
}
