const goToReg = (map,source,code) => {
    console.log('roadsext', source.getFeatures())
    console.log(code)
    const feature = source.getFeatures().find((feat) => feat.get("code") == code)
  
    const polygon = feature.getGeometry();
    map.getView().fit(polygon);
    console.log("click")
  }