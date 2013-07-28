$(document).ready(function(){

	var keys = [
		[ //prvi red
			{
				label1:"`"
			},
			{
				label1:"1",
				label2:"!"
			},
			{
				label1:"2",
				label2:'"'
			},
			{
				label1:"3",
				label2:"#"
			},
			{
				label1:"4",
				label2:"$"
			},
			{
				label1:"5",
				label2:"%"
			},
			{
				label1:"6",
				label2:"&"
			},
			{
				label1:"7",
				label2:"/"
			},
			{
				label1:"8",
				label2:"("
			},
			{
				label1:"9",
				label2:")"
			},
			{
				label1:"0",
				label2:"="
			},
			{
				label1:"'",
				label2:"?"
			},
			{
				label1:"+",
				label2:"*"
			},
			{
				label1:"::backspace",
			}
		],
		[ //drugi red
			{
				label1:"::tab"
			},
			{
				label1:"q"
			},
			{
				label1:"w"
			},
			{
				label1:"e",
				label2:"€"
			},
			{
				label1:"r"
			},
			{
				label1:"t"
			},
			{
				label1:"z"
			},
			{
				label1:"u"
			},
			{
				label1:"i"
			},
			{
				label1:"o"
			},
			{
				label1:"p"
			},
			{
				label1:"š"
			},
			{
				label1:"đ"
			},
			{
				label1:"::enter"
			},
		],
		[ //treći red
			{
				label1:"::caps"
			},
			{
				label1:"a"
			},
			{
				label1:"s"
			},
			{
				label1:"d"
			},
			{
				label1:"f"
			},
			{
				label1:"g"
			},
			{
				label1:"h"
			},
			{
				label1:"j"
			},
			{
				label1:"k"
			},
			{
				label1:"l"
			},
			{
				label1:"č"
			},
			{
				label1:"ć"
			},
			{
				label1:"ž"
			},
		],
		[ //četvrti red
			{
				label1:"::lshift"
			},
			{
				label1:"<",
				label2:">"
			},
			{
				label1:"y"
			},
			{
				label1:"x"
			},
			{
				label1:"c"
			},
			{
				label1:"v",
				label2:"@"
			},
			{
				label1:"b"
			},
			{
				label1:"n"
			},
			{
				label1:"m"
			},
			{
				label1:",",
				label2:";"
			},
			{
				label1:".",
				label2:":"
			},
			{
				label1:"-",
				label2:"_"
			},
			{
				label1:"::rshift"
			}
		],
		[ //peti red
			{
				label1:"::lctrl"
			},
			{
				label1:"::lwin"
			},
			{
				label1:"::alt"
			},
			{
				label1:"::space"
			},
			{
				label1:"::altgr"
			},
			{
				label1:"::rwin"
			},
			{
				label1:"::menu"
			},
			{
				label1:"::rctrl"
			},
		]
	];
	
	var $mainContainer = $('div#keyboard')
	
	for (var i in keys) {
		var $rowContainer = $('<div>',{id:'row'+(i),class:'keyrow'})
		var row = keys[i]
		
		for (var j in row) {
			//var $keyContainer = $('<div>',{id:'key'+(i)+'-'+(j),class:'key'})
			var key = row[j]
			var label1 = key.label1
			var keyClass = 'key'+(label1.indexOf("::")==0?' '+label1.substr(2):'')
			
			var $keyContainer = $('<div>',{id:'key'+(i)+'-'+(j),class:keyClass})
			$('<div>',{class:'label1',text:label1}).appendTo($keyContainer);
			
			var label2 = key.label2 || ''
			$('<div>',{class:'label2',text:label2}).appendTo($keyContainer);
			
			$($keyContainer).appendTo($rowContainer);
		}
		$($rowContainer).appendTo($mainContainer);
	}
})
