<template>
	<div>
		<el-breadcrumb >
		  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
		  <el-breadcrumb-item>数据管理</el-breadcrumb-item>
		  <el-breadcrumb-item>添加数据</el-breadcrumb-item>
		  <el-breadcrumb-item>图表</el-breadcrumb-item>
		  <el-breadcrumb-item>编辑</el-breadcrumb-item>
		  <el-breadcrumb-item>设置</el-breadcrumb-item>
		  <el-breadcrumb-item>说明</el-breadcrumb-item>
		</el-breadcrumb>
		<table 
    	id='table'
    	data-toggle="table"
		  data-pagination="true"
		  data-side-pagination='client'
		  data-search='true'
		  data-autoRefresh='true'
		  data-search-align="right"
		  data-search-on-enter-key="false"
		  data-strict-searce='true'
    	>
	      <thead>
	        <tr>
	          <th  data-field='state'><input type="checkbox"  id='state'  /></th>
	          <th  data-field="id">ID</th>
	          <th  data-field="name">名称</th>
	          <th  data-field="price">价格</th>
	          <th  data-field="make">操作</th>
	        </tr>
	      </thead>
	    </table>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style>
</style>