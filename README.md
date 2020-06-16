# CesiumInfobox
模拟CesiumInfobox的样式，给cesium中的entity后期加入属性值时，点击entity，实现原始infobox一样的表现形式

在entity的属性中添加 description: createDescriptionHtml(item) 即可实现点击entity，弹出该entity对应的属性和属性值信息
这里面的item是你所需要给entity添加或者需要展示的信息对象，如item = {name:"test",id:"000112",地址:"北京市西城区"};
