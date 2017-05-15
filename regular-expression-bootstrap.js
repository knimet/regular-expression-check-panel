/**
 * Created by Administrator on 2017/5/7.
 */

var Panel = React.createClass({
    getInitialState:function(){
        return {
            "RegExp":"",
            "RegString":"",
            "RegResult":"",
            "RegMethod":"you have not choose method"
        }
    },
    render:function(){
        return (
            <div className="panel panel-default">
		<div className="panel-heading">
			<h3 className="panel-title">regular expressions</h3>
		</div>
		<div className="panel-body">
		    <div className="well">
			choose method, input regular expression and string, the result will list in the spaces below.
		    </div>
		<div className="row">
			<div className="col-xs-3"></div>
			<div className="input-group col-xs-6">
                        	<input type="text" onChange={this.setReg} ref="regExp" className="form-control" placeholder="RegExp"/>
                    	</div>
		</div>
		<div className="row" style={{"margin-top":"0.5em"}}>
			<div className="col-xs-3"></div>
			<div className="input-group  col-xs-6">
                        	<input type="text" onChange={this.setReg} ref="regString" className="form-control" placeholder="String"/>
                    	</div>
		</div>
             	<div className="row" style={{"margin-top":"0.5em"}}>
			<div className="col-xs-3"></div>
			<div className="col-xs-3">
				<div className="input-group">
					<span className="input-group-addon">
						<input type="radio" name="refStyle" value="exec" onClick={this.setRegMethod} />
					</span>
					<span className="form-control">EXEC</span>
                    		</div>
			</div>
			<div className="col-xs-3">
                    		<div className="input-group">
                        		<span className="input-group-addon"><input type="radio" name="refStyle" value="test" onClick={this.setRegMethod} />
					</span>
					<span className="form-control">TEST</span>
                    		</div>
			</div>
		</div>
                    
                    <div className="well" style={{"margin-top":"1em"}}>
                        {this.state.RegResult}
                    </div>
		</div>
            </div>
        );

    },
    setReg:function(){
        var regExp =  ReactDOM.findDOMNode(this.refs.regExp).value;
        var regString = ReactDOM.findDOMNode(this.refs.regString).value;
        if(this.state.RegMethod == "test"){
            var regResult = eval(regExp+".test('"+regString+"')");
            regResult = this.state.RegMethod+":\n"+regResult;
        }else if(this.state.RegMethod == "exec"){
            var regResult = eval(regExp+".exec('"+regString+"')");
            regResult = this.state.RegMethod+":\n"+regResult;
        }else{
            regResult = "there is no method chosen";
        }
        this.setState({"RegExp":regExp,"RegString":regString,"RegResult":regResult.toString()});
    },
    setRegMethod:function(e){
        var method = e.target.value;
        this.setState({"RegMethod":method});
        var regExp =  ReactDOM.findDOMNode(this.refs.regExp).value;
        var regString = ReactDOM.findDOMNode(this.refs.regString).value;
        if(method == "test"){
            var regResult = eval(regExp+".test('"+regString+"')");
            regResult = method+":\n"+regResult;
        }else{
            var regResult = eval(regExp+".exec('"+regString+"')");
            regResult = method+":\n"+regResult;
        }
        this.setState({"RegExp":regExp,"RegString":regString,"RegResult":regResult.toString()});
    }
})