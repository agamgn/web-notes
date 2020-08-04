
function treeData(source, id, parentId, children){   
    let cloneData = JSON.parse(JSON.stringify(source))// 对源数据深度克隆
    return cloneData.filter(father=>{// 循环所有项，并添加children属性
        let branchArr = cloneData.filter(child => father[id] == child[parentId]);// 返回每一项的子级数组
        branchArr.length>0 ? father[children] = branchArr : ''//给父级添加一个children属性，并赋值
        return father[parentId] == 0        // 如果第一层不是parentId=0，请自行修改
    })
}
data = [
    {id:1,parentId:0,name:"一级菜单A",rank:1},
    {id:2,parentId:0,name:"一级菜单B",rank:1},
    {id:3,parentId:0,name:"一级菜单C",rank:1},
    {id:4,parentId:1,name:"二级菜单A-A",rank:2},
    {id:5,parentId:1,name:"二级菜单A-B",rank:2},
    {id:6,parentId:2,name:"二级菜单B-A",rank:2},
    {id:7,parentId:4,name:"三级菜单A-A-A",rank:3},
    {id:8,parentId:7,name:"四级菜单A-A-A-A",rank:4},
    {id:9,parentId:8,name:"五级菜单A-A-A-A-A",rank:5},
    {id:10,parentId:9,name:"六级菜单A-A-A-A-A-A",rank:6},
    {id:11,parentId:10,name:"七级菜单A-A-A-A-A-A-A",rank:7},
    {id:12,parentId:11,name:"八级菜单A-A-A-A-A-A-A-A",rank:8},
    {id:13,parentId:12,name:"九级菜单A-A-A-A-A-A-A-A-A",rank:9},
    {id:14,parentId:13,name:"十级菜单A-A-A-A-A-A-A-A-A-A",rank:10},
  ]
  console.log(treeData(data,"id","parentId","children"))