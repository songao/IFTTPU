
/**
 * 解决T.string.ellipse执行速度的问题.
 * @param {string} text 需要处理的文本
 * @param {number} width 最宽的宽度.
 * @param {string=} opt_dots 小数点.
 */
T.string.fast_ellipse = function() {
  var cache = null;
  var span = null;

  function initContainer() {
    span = document.createElement('SPAN');
    span.style.position = 'absolute';
    span.style.left = '-10000px';
    span.style.top = '-10000px';
    span.style.padding = '0px';
    span.style.margin = '0px';
    document.body.insertBefore(span, document.body.firstChild);
  }

  function getCharWidth(string) {
    span.innerHTML = string;
    return span.offsetWidth;
  }

  function buildCache(dots) {
    if (null == span) {
      initContainer();
    }
    cache = {}
    for(var i = 1; i <= 255; i ++) {
      cache[String.fromCharCode(i)] = getCharWidth(String.fromCharCode(i));
    }
    cache['中'] = getCharWidth('中'); // 汉字的宽度都是一样的.
    if(dots){
        cache[dots] = getCharWidth(dots);
    }
  }

  return function(text, width, opt_dots) {
    var rv = [],
        cc = null,
        cw = 0,
        tw = 0,
        dots = opt_dots || '...';

    if (null == cache) {
      buildCache(dots);
    }

    if (dots) {
        width -= cache[dots];
    }
    
    for(var i = 0, l = text.length; i < l; i ++) {
      cc = text.charCodeAt(i);
      //0xFE30 <=cc && 0xFFA0 >= cc 常见的中文标点 
      //参考：http://en.wikibooks.org/wiki/Unicode/Character_reference/F000-FFFF
      if ((0x4E00 <= cc && cc <= 0x9FFF) || (0xFE30 <= cc && cc <= 0xFFA0)) {
        // CJK
        cw = cache['中'];
      } else {
        cw = cache[String.fromCharCode(cc)] || cache['a'];
      }

      tw += cw;
      if (tw >= width) {
        break;
      } else {
        // 追加一个字符.
        rv.push(text.charAt(i));
      }
    }

    if (tw < width) {
      return T.string.encodeHTML(text);
    } else {
      rv.pop();
      return T.string.encodeHTML(rv.join('') + dots);
    }
  }
}();

