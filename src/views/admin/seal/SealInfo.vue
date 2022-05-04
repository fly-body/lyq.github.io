<template>
  <div class="info">
    <el-header>
      <el-form>
				<el-col :span="5">
					<el-form-item label="起始时间">
						<el-date-picker
							type="date"
							placeholder="请输入起始时间"
							v-model="ruleForm.date1"
							style="width:160px"
						></el-date-picker>
					</el-form-item>
				</el-col>
				<el-col :span="5">
					<el-form-item label="结束时间">
						<el-date-picker
							type="date"
							placeholder="请输入起始时间"
							v-model="ruleForm.date2"
							style="width:160px"
						></el-date-picker>
					</el-form-item>
				</el-col>
				<el-col :span="5">
					<el-form-item>
						<el-select v-model="selectValue" clearable placeholder="请选择">
							<el-option
								v-for="(item,index) in list"
								:key="index"
								:label="item"
								:value="item">
							</el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :span="6">
					<el-form-item label="账号">
						<el-input placeholder="请输入账号" style="width: 180px"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="3">
					<el-form-item>
						<el-button type="primary" icon="el-icon-search">搜索</el-button>
					</el-form-item>
				</el-col>
      </el-form>
    </el-header>
		<el-main>
				<el-table
				  :data="tableData"
					style="width: 100%">
					<el-table-column
						label="编号"
						prop="id"
						width="60">
					</el-table-column>
					<el-table-column
						label="姓名"
						prop="name"
						width="120">
					</el-table-column>
					<el-table-column
						label="被封原因"
						prop="desc"
						>
					</el-table-column>
					<el-table-column
						label="开始日期"
						prop="startTime"
						width="180">
					</el-table-column>
					<el-table-column
						label="结束日期"
						prop="endTime"
						width="180">
					</el-table-column>
					<el-table-column
						label="状态"
						prop="status"
						width="60">
						<template slot-scope="scope">
							<el-switch
								v-model="scope.row.status"
								active-color="#13ce66"
								inactive-color="#ff4949"
								@change="statusChange(scope.$index,scope.row.status)"
								>
							</el-switch>
						</template>
					</el-table-column>
					<el-table-column
						label="操作"
						width="180">
						<template slot-scope="scope">
							<a href="javascript:;" @click="detail(scope.row.id)">详情</a>
						</template>
					</el-table-column>
			</el-table>
		</el-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        data1: "",
        data2: "",
      },
			list:[
				'香蕉',
				'苹果',
				'阿拉斯加'
			],
			tableData: [
				{
					id: 1,
					name: 'body-fly',
					desc:'长得太帅',
					startTime: '2022-5-4 00:00:00',
					endTime: '2022-5-4 00:00:00',
					status: 'false'
				}
			],
			selectValue: ''
    }
  },
	methods:{
		statusChange(index,status){
			this.tableData[index].status = status
		},
		detail(index){
			console.log(index);
		}
	}
};
</script>

<style lang="less" scoped>
</style>