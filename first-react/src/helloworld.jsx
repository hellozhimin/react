import React,{Component} from 'react';

/**
 * 创建组件的第一种方法
 */
// const Helloworld = (props) => {
// 	console.log(props);
// 	return (
// 		<div>{ props.name } says: this is { props.city}</div>
// 		)
// }

/**
 * 创建组件的第二种方法
 */
class Helloworld extends Component {
	state = {
		switch:0,
		name:this.props.name1
	}
	clickHander = ()=>{
		const {name1,name2} = this.props;
		if(this.state.switch === 0){
			console.log(this.state.name);
			this.setState({
				switch:1,
				name:name2
			})
		}else{
			console.log(this.state.name);
			this.setState({
				switch:0,
				name:name1
			})
		}
	}

	render () {
		return (
			<div onClick={this.clickHander}>{ this.state.name } say: this is { this.props.city }</div>
		)
	}
}
export default Helloworld