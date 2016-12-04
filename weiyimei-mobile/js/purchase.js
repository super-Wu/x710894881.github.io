// 基础配置
var dataConfig = {
    'total': '99件',
    'salesVolume': 66,
    // 规格
    'specifications': [
        {   
            'imgLink': 'images/specifications_1.png',
            'desc': '企业开户+总监服务',
            'time': '3天',
            'price': '19999元',
            'checked': true
        },
        {
            'imgLink': 'images/specifications_2.png',
            'desc': '企业开户+研发团队',
            'time': '3天',
            'price': '49999元',
            'checked': false
        }
    ],
    // 席位
    'seat': [
        {
            'index': 0,
            'checked': true,
            'num': '1~10位',
            'price': '1999元/人',
            'number': 1,
            'minNum': 1,
            'maxNum': 10
        },
        {
            'index': 1,
            'checked': false,
            'num': '11~20位',
            'price': '1499元/人',
            'number': 11,
            'minNum': 11,
            'maxNum': 20
        },
        {
            'index': 2,
            'checked': false,
            'num': '20位以上',
            'price': '999元/人',
            'number': 21,
            'minNum': 21,
            'maxNum': Infinity
        }
    ]
};

// 模板
var tpl = {
    // 模板：规格模板
    formatTpl: function (data) {
        var html = '';
        data = data || [];

        for (var i = 0, len = data.length; i < len; i++) {
            var selected = data[i].checked ? 'selected' : '';
            html += '<li data-index="' + i + '">'
                 +      '<div class="img">'
                 +          '<img src="' + data[i].imgLink + '" width="100%" height="100%" alt="规格1">'
                 +      '</div>'
                 +      '<div class="list">'
                 +          '<h3><span class="specifications-desc">' + data[i].desc + '</span><span class="time">' + data[i].time + '</span></h3>'
                 +          '<p class="price">' + data[i].price + '</p>'
                 +      '</div>'
                 +      '<div class="select">'
                 +          '<span class="icon '+ selected +'"></span>'
                 +      '</div>'
                 +  '</li>';
        }
        return html;
    },
    // 模板：席位模板
    seatTpl: function (data) {
        var html = '';
        data = data || [];

        for (var i = 0, len = data.length; i < len; i++) {
            var selected = data[i].checked ? 'selected' : '';
            var show = '';
            if (data[i].number > data[i].minNum ) {
                show = 'show';
            }
            html += '<li data-index="' + data[i].index + '">'
                 +      '<div class="select">'
                 +          '<span class="icon ' + selected + '"></span>'
                 +      '</div>'
                 +      '<div class="seat-desc">'
                 +          '<span class="seat-num">' + data[i].num + '</span>'
                 +          '<span class="seat-price">' + data[i].price + '</span>'
                 +      '</div>'
                 +      '<div class="seat-number">'
                 +          '<span class="minus '+ show +'"><i class="icon"></i></span>'
                 +          '<input type="number" name="number" value="'+ data[i].number +'">'
                 +          '<span class="plus"><i class="icon"></i></span>'
                 +      '</div>'
                 + '</li>';
        }

        return html;
    }
};

// 处理数据
var util = {
    // 筛选已经选择的数据
    selectChecked: function (data) {
        data = data || [];
        var arr = [];
        for (var i = 0, len = data.length; i < len; i++) {
            if (data[i].checked) {
                arr.push(data[i]);
            }
        }
        return arr;
    },
    selectedHandle: function(index, data) {
        index = index || 0;
        data = data || [];
        for (var i = 0, len = data.length; i < len; i++) {
            data[i].checked = false;
        }
        data[index].checked = true;
    },
    // 重置数据
    resetData: function () {
        var baseData = $.extend(true, {}, dataConfig);
        // console.log(baseData);
        return baseData;
    },
    changeNum: function (index, num) {
        console.log('11111');
        var data = dataConfig.seat;
        for (var i = 0, len = data.length; i < len; i++) {
            data[index].number = num;
        }
        Purchase.renderSeat(dataConfig.seat);
        Purchase.countTotal();

        // 渲染购物车
        $resultBox = $('.result-box');
        var seatHtml = tpl.seatTpl(util.selectChecked(dataConfig.seat));
        $resultBox.find('.seat-list').html(seatHtml);
    }
};



var Purchase = {
    init: function () {
        this.baseData = util.resetData();
        // 渲染页面
        this.renderPage(dataConfig);
        // 渲染购物车
        this.renderCat();

        this.selectFormat();
        this.selectSeat();

        this.minusNum();
        this.plusNum();

        // 计算总价
        this.countTotal();
        // 清空购物车
        this.clearCat();

        //返回上一页
        this.backHandle();

    },
    // 渲染页面
    renderPage: function (data) {
        this.renderFormat(data.specifications);
        this.renderSeat(data.seat);
    },
    // 渲染规格 
    renderFormat: function (data) {
        // 规格
        var formatHtml = tpl.formatTpl(data);
        $('.specifications-wrap').find('.specifications-list').html(formatHtml);
    },
    // 渲染席位
    renderSeat: function (data) {
        // 席位
        var seatHtml = tpl.seatTpl(data);
        $('.seat-wrap').find('.seat-list').html(seatHtml);
    },
    // 渲染购物车
    renderCat: function () {
        var $resultBox = $('.result-box');
        $('#cart').on('click', function () {
            $resultBox.toggle();
            // 渲染购物车
            if ($resultBox.is(':visible')) {
                var formatHtml = tpl.formatTpl(util.selectChecked(dataConfig.specifications));
                console.dir(util.selectChecked(dataConfig.seat));
                var seatHtml = tpl.seatTpl(util.selectChecked(dataConfig.seat));

                $resultBox.find('.specifications-list').html(formatHtml);
                $resultBox.find('.seat-list').html(seatHtml);
            }
        });
    },
    // 清空购物车
    clearCat: function () {
        var that = this;
        var $resultBox = $('.result-box');
        $resultBox.on('click', '.btn-empty', function () {
            $resultBox.find('.specifications-list').html('<p>购物车空啦...</p>');
            $resultBox.find('.seat-list').html('');

            // 重置数据
            dataConfig = $.extend(true, {}, that.baseData);

            $resultBox.hide();

            // 重新渲染页面，计算总计
            that.renderPage(dataConfig);
            that.countTotal();

        });
    },
    // 计算总价
    countTotal: function () {
        var total = 0;
        // 规格
        var aFormat = util.selectChecked(dataConfig.specifications);
        // 席位
        var aSeat = util.selectChecked(dataConfig.seat);
        // 计算总价
        total = parseFloat(aFormat[0].price, 10) + parseFloat(aSeat[0].price, 10) * parseInt(aSeat[0].number, 10);
        $('#total-count').html(total);
    },
    // 选择规格
    selectFormat: function () {
        var that = this;
        $('.specifications-wrap').on('click', '.select', function () {
            var thisLi = this;
            // console.log($(thisLi).index());
            util.selectedHandle($(thisLi).closest('li').attr('data-index'), dataConfig.specifications);
            // 重新渲染规格数据
            that.renderFormat(dataConfig.specifications);
            // 重新计算总价
            that.countTotal();
        });
        
    },
    // 选择席位
    selectSeat: function () {
        var that = this;
        $('.seat-wrap').on('click', '.select', function () {
            var thisLi = this;
            // console.log($(thisLi).index());
            util.selectedHandle($(thisLi).closest('li').attr('data-index'), dataConfig.seat);
            // 重新渲染席位数据
            that.renderSeat(dataConfig.seat);
            // 重新计算总价
            that.countTotal();
        });
    },
    // 减少
    minusNum: function () {
        $('.seat-list').on('click', '.minus', function () {
            console.log(1);
            var index = $(this).closest('li').attr('data-index');
            var minNum = dataConfig.seat[index].minNum;
            var maxNum = dataConfig.seat[index].maxNum;
            var baseNum = parseInt(dataConfig.seat[index].number, 10);

            baseNum--;

            if (baseNum < minNum) {
                return;
            }

            util.changeNum(index, baseNum);
            
            if (baseNum == minNum) {
                $('.seat-list li').eq(index).find('.minus').hide();
            }else {
                $('.seat-list li').eq(index).find('.minus').css('display', 'inline-block');
            }

        });
    },
    // 增加
    plusNum: function () {
        $('.seat-list').on('click', '.plus', function () {
            var index = $(this).closest('li').attr('data-index');
            var minNum = dataConfig.seat[index].minNum;
            var maxNum = dataConfig.seat[index].maxNum;
            var baseNum = parseInt(dataConfig.seat[index].number, 10);

            baseNum++;

            if (baseNum > maxNum) {
                return;
            }

            util.changeNum(index, baseNum);

            if (baseNum == minNum) {
                $('.seat-list li').eq(index).find('.minus').hide();
            }else {
                $('.seat-list li').eq(index).find('.minus').css('display', 'inline-block');
            }

        });
    },
    // 结算
    settlement: function () {

    },
    // 右上角返回上一页
    backHandle: function () {
        $('.btn-back').on('click', function () {
            window.history.go(-1);
        });
    }
};   


Purchase.init();











