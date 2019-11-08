<template>
	<div class="manage_page fillcontain">
		<el-row style="height: 100%;">
	  		<el-col :span="4"  style="min-height: 100%; background-color: #324057;">
				<el-menu :default-active="defaultActive" style="min-height: 100%;background: rgb(50, 64, 87);color: #fff;" theme="dark" router>
					<el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-document"></i>数据管理</template>
						<el-menu-item index="userList">用户列表</el-menu-item>
						<el-menu-item index="shopList">商家列表</el-menu-item>
						<el-menu-item index="foodList">食品列表</el-menu-item>
						<el-menu-item index="orderList">订单列表</el-menu-item>
						<el-menu-item index="adminList">管理员列表</el-menu-item>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-plus"></i>添加数据</template>
						<el-menu-item index="addShop">添加商铺</el-menu-item>
						<el-menu-item index="addGoods">添加商品</el-menu-item>
					</el-submenu>
					<el-submenu index="4">
						<template slot="title"><i class="el-icon-star-on"></i>图表</template>
						<el-menu-item index="visitor">用户分布</el-menu-item>
						<!-- <el-menu-item index="newMember">用户数据</el-menu-item> -->
					</el-submenu>
					<el-submenu index="5">
						<template slot="title"><i class="el-icon-edit"></i>编辑</template>
						<!-- <el-menu-item index="uploadImg">上传图片</el-menu-item> -->
						<el-menu-item index="vueEdit">文本编辑</el-menu-item>
					</el-submenu>
					<el-submenu index="6">
						<template slot="title"><i class="el-icon-setting"></i>设置</template>
						<el-menu-item index="adminSet">管理员设置</el-menu-item>
						<!-- <el-menu-item index="sendMessage">发送通知</el-menu-item> -->
					</el-submenu>
					<el-submenu index="7">
						<template slot="title"><i class="el-icon-warning"></i>说明</template>
						<el-menu-item index="explain">说明</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-col>
			<div>
			<div class="hello">
	  </div>
	    </div>
				<el-col :span="20" style="height: 100%;overflow: auto;">
					<keep-alive>
					    <router-view></router-view>
					</keep-alive>
				</el-col>
			</el-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      data:[]
    }
  },
  computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
	created(){
		this.getData()
	},
	methods:{
		 
		//   不用开接口,写死数据
//		getData(){
//		var that=this
//		this.$http.get('../../static/data.json').then(res=>{
//		console.log(res.data)
//		this.data=res.data
//		console.log(this.data)
//		$("#table").bootstrapTable({
//			data:res.data,
//			pageSize: 12,
//			formatLoadingMessage: function () {  
//      		return "请稍等，正在加载中..."
//   		},
//   		columns : [{
//				field:"state",
//				checkbox:true,
//				align : 'center' ,
//				formatter:function(value,row,index){
//				   if (row.state == true)
//				       return {
//				           checked : true//设置选中
//				       };
//				   return value;
//					}
//				},
//				{
//					field:"id",
//					title:'id'
//				},
//				{
//					field:"name",
//					title:'名字'
//				},
//				{
//					field:"price",
//					title:'价格'
//				},
//				{
//					field:"make",
//					title:'操作',
//					formatter: this.btnGroup,    // 自定义方法，添加按钮组
//	        		events: {               // 注册按钮组事件
//	            		'click #modRole': function (event, value, row, index) {
//							layer.alert(`id:${row.id}<br/>名字:${row.name}</br>价格:${row.price}`, {})
//	            		},
//			            'click #modUser': function (event, value, row, index) {
//							layer.alert(`id:${row.id}<br/>名字:${row.name}</br>价格:${row.price}`, {})
//			            },
//	           			'click #delUser': function (event, value, row, index) {
//								layer.confirm('是否删除？', {
//								  btn: ['确定','取消'] //按钮
//								}, function(){
//									console.log(this)
//									console.log(that.data)
//									console.log(index)
//									var data=that.data
//									data.splice(index,1)
//									that.$http.get('../../static/data.json',{parmas:{id:index}}).then(res=>{
//											console.log(res.data)
//											if(data.length<res.data.length){
//												layer.msg('删除成功');
//											}
//									})
//								}, function(){
//								  layer.msg('取消操作');
//								});
//	            			}
//	        			}
//					}
//   			]
//			})
//		})
//		},


		//  开接口，需要先运行utils中的index.js
		getData(){
			var that=this
	  		this.$http.get('http://localhost:3333/').then(res=>{
	  		console.log(res)
	  		this.data=res.data
	  		console.log(this.data)
	  		$("#table").bootstrapTable({
	  			data:that.data,
	  			pageSize: 12,
	  			formatLoadingMessage: function () {  
	        		return "请稍等，正在加载中..."
	     		},
	     		columns : [{
					field:"state",
					checkbox:true,
					align : 'center' ,
					formatter:function(value,row,index){
					   if (row.state == true)
					       return {
					           checked : true//设置选中
					       };
					   return value;
						}
					},
					{
						field:"id",
						title:'id'
					},
					{
						field:"name",
						title:'名字'
					},
					{
						field:"price",
						title:'价格'
					},
					{
						field:"make",
						title:'操作',
						formatter: this.btnGroup,    // 自定义方法，添加按钮组
		        		events: {               // 注册按钮组事件
		        			'click #addUser': function (event, value, row, index) {
								layer.alert(`id:<input type='username' class='biaodan1' /><br/>名字:<input type='username' class='biaodan2' /></br>价格:<input type='username' class='biaodan3' />`, {closeBtn: 0},function(){
//									alert($('.biaodan1').val())
									that.$http({
										url:'http://localhost:3333/add',
										method:'post',
										data:{
											id:$('.biaodan1').val(),
											name:$('.biaodan2').val(),
											price:$('.biaodan3').val()
										},
										header:{'content-type': 'application/x-www-form-urlencoded'},
										datatype:'json'
									}).then(res=>{
										that.$http.get('http://localhost:3333/').then(res=>{
												$("#table").bootstrapTable('load',res.data)
												layer.msg('添加成功');
										})
									})
								})
		            		},
		            		'click #modRole': function (event, value, row, index) {
								layer.alert(`id:${row.id}<br/>名字:${row.name}</br>价格:${row.price}`, {})
		            		},
				            'click #modUser': function (event, value, row, index) {
								layer.alert(`id:${row.id}<br/>名字:${row.name}</br>价格:${row.price}`, {})
				            },
		           			'click #delUser': function (event, value, row, index) {
									layer.confirm('是否删除？', {
									  btn: ['确定','取消'] //按钮
									}, function(){
										console.log(that.data)
										console.log(index)
										console.log(row.id)
										var data=that.data
										that.$http({
											method:'post',
											url:'http://localhost:3333/delete',
											data:{id:index},
											datatype:'json',
											header:{'content-type': 'application/x-www-form-urlencoded'}
										}).then(res=>{
											that.$http.get('http://localhost:3333/').then(res=>{
												$("#table").bootstrapTable('load',res.data)
												layer.msg('删除成功');
											})
										})
									}, function(){
									  layer.msg('取消操作');
									});
		            			}
		        			}
						}
	     			]
	  			})
	  		})
		},
		showUser(id,username){
			console.log(id)
		},
		btnGroup () {   
    	   let html =
    	   '<a href="####" class="btn btn-primary" id="addUser" data-toggle="modal" data-target="#adduser" ' +
	        'style="margin-left:15px" title="添加用户">' +
	        '<span class="glyphicon glyphicon-plus"></span></a>'+
	        '<a href="####" class="btn btn-info" id="modRole" data-toggle="modal" data-target="#editrole" title="修改权限"' +
	        'style="margin-left:15px" title="查看用户">' +
	        '<span class="glyphicon glyphicon-search"></span></a>' +
	        '<a href="####" class="btn btn-warning" id="modUser" data-toggle="modal" data-target="#editinfo" ' +
	        'style="margin-left:15px" title="修改用户">' +
	        '<span class="glyphicon glyphicon-edit"></span></a>' +
	        '<a href="####" class="btn btn-danger" id="delUser" data-toggle="modal" data-target="#deleteuser" ' +
	        'style="margin-left:15px" title="删除用户">' +
	        '<span class="glyphicon glyphicon-trash"></span></a>'
	        
    	   return html
		}
	},
	watch:{
		onData(data){
			this.data=data
			console.log(data)
		}
	}
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style lang="less" scoped>
	@import '../style/mixin';
	.manage_page{
		
	}
</style>