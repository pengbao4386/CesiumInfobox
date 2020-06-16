// 添加geometry
const addLineGeometies = function (viewer, item) {
  viewer.entities.add({
    name: item.name,
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArrayHeights(item.positions),
      width: 15.0,
      material: new Cesium.PolylineGlowMaterialProperty({
        glowPower: 0.2,
        taperPower: 0.5,
        color: Cesium.Color.CORNFLOWERBLUE
      })
    },
    description: createDescriptionHtml(item)
  });
};

// 模拟infoxbox,创建信息框的html展示数据
const createDescriptionHtml = function (item) {
  let contentHtml = '<table class="cesium-infoBox-defaultTable"><tbody>';
  for (let pro in item) {
    if(pro == "positions")continue;
      contentHtml += '<tr><th>' + `${pro}` + '</th>'+ '<td>' + `${item[pro]}`+ '</td>' + '</tr>'
  }
  contentHtml += '</tbody></table>'
  return contentHtml
};
