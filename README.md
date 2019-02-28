# EasyViewImage  

  该js插件可用于点击网页中任何图片后放大查看，且设置有遮罩层，防止误触，使用简便，代码构造简单，可根据自身项目要求对代码进行修改。  
## 使用说明  

**版本**  

**v1:**  

1.引入jquery-x-x.js（jquery任意版本皆可）及easyViewImg.js文件；  

2.引入文件后运行方法```easyViewImg(classNameArr,expandWidthParam,expandHeightParam)```皆可，下面对执行方法的参数进行说明：  
  - classNameArr: 需要执行放大查看的图片的class名称，若不填则传入空值或null，表明对页面中所有标签为img的图片执行方法，若传入一个参数(eg: img1)则仅对该图片执行方法，若传入的为数组(eg:['img1','img2','img3'...])则对数组中每一个图片执行方法。
  - expandWidthParam：图片放大参数，设置该参数即表明将图片的宽度放大的倍数，不可为负数，默认为1.5倍。
  - expandHeightParam：图片放大参数，设置该参数即表明将图片的高度放大的倍数，不可为负数，默认为1.5倍。
