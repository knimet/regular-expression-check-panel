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
        var panelClass = {
            "width":"40vw",
            "height":"20vw",
            "position":"absolute",
            "top":"50%",
            "left":"50%",
            "transform":"translate(-50%,-50%)",
            "border":"1px solid #888",
            "border-radius":"5px",
            "box-shadow":"5px 5px 5px #AAA",
            "box-sizing":"border-box",
            "padding":"2px",
            "display":"flex",
            "flex-direction":"column",
            "justify-content":"space-around"
        };
        var inputStyle={
            "flex":"1",
            "display":"flex",
            "align-items":"center",
            "justify-content":"center"
        };
        var inputRadioStyle={
            "flex":"1",
            "display":"flex",
            "align-items":"center",
            "justify-content":"center"
        };
        var resultStyle={
            "flex":"2",
            "display":"flex",
            "flex-direction":"column",
            "justify-content":"center",
            "align-items":"center",
            "border-top":"1px solid #666"
        };
        return (
            <div style={panelClass}>
                    <div style={inputStyle}>
                        <input type="text" onChange={this.setReg} ref="regExp" placeholder="RegExp"/>
                    </div>
                    <div style={inputStyle}>
                        <input type="text" onChange={this.setReg} ref="regString" placeholder="String"/>
                    </div>
                    <div style={inputRadioStyle}>
                        <input type="radio" name="refStyle" value="exec" style={{"flex":"1"}} onClick={this.setRegMethod} /> <span style={{"flex":"2"}}>EXEC</span>
                    </div>
                    <div style={inputRadioStyle}>
                        <input type="radio" name="refStyle" value="test" style={{"flex":"1"}} onClick={this.setRegMethod} /> <span style={{"flex":"2"}}>TEST</span>
                    </div>
                    <div style={resultStyle}>
                        {this.state.RegResult}
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