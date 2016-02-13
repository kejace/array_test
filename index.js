var blockapps = require('blockapps-js')

var code = "contract C{ \
                  mapping (address => bytes) m; \
                  function f() { m[msg.sender] = \"abcd\";}\
                }";

var privkey = "e011bdbfde66bb78af76aaf907e6bbf2c5715d163524241ae50b5309b40da42d";
var pub_address = "903b4a914940f08399e41dddcab8e1ea8939cbab";

blockapps.query.serverURI = 'http://strato-dev2.blockapps.net';

blockapps.Solidity(code).call("newContract", privkey).then(function(contract){

            contract.state.f().callFrom(privkey)

        }).then(function(v){
        
            console.log("hello contract")
            v.state.m(0).then(function(v){
                console.log(v);
            })
    }
)
