var blockapps = require('blockapps-js')

var contract = "contract C{ \
                  mapping (address => bytes) m; \
                  function f(address a) { m[a] = \"abcd\";}\
                }";

var privkey = "e011bdbfde66bb78af76aaf907e6bbf2c5715d163524241ae50b5309b40da42d";
var pub_address = "903b4a914940f08399e41dddcab8e1ea8939cbab";

blockapps.query.serverURI = 'http://strato-dev2.blockapps.net';

blockapps.Solidity(contract).call("newContract", privkey).then(function(x) {contractObj = x}).then(function(v){
        
        console.log("hello contract")
        contractObj.state.m(0).then(function(v){
            console.log(v);
        })
    }
)