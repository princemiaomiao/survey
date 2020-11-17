function init() {
    Survey
    .StylesManager
    .applyTheme("winterstone");
  var json = {
 "focusFirstQuestionAutomatic": false, 
 "pages": [
  {
   "name": "page1",
   "elements": [
    {
     "type": "panel",
     "name": "panel1",
     "elements": [
      {
       "type": "html",
       "name": "income_intro",
       "html": "<article class='intro'>    <h1 class='intro__heading intro__heading--income title'>                     2020 年客户满意度调查              </h1>    <div class='intro__body wysiwyg'>       <p>客户满意度调查问卷总分共 100 分， 涉及的主要题型如下：</p><ul>        \t<li>        \t\t量表题(必选)       \t</li>        \t<li>        \t\t选择题(必选)       \t</li>        \t<li>        \t\t问答题(非必选)       \t</li>    </ul>   <p>内容大类包括：</p>       <ul>        \t<li>        \t\t人员与设备资源配置       \t</li>        \t<li>        \t\t团队服务的质量       \t</li>        \t<li>        \t\t服务及时与规范       \t</li>        \t<li>        \t\t突发情况的处置       \t</li>        \t<li>        \t\t客诉事件的处理       \t</li>        \t<li>        \t\t同行竞争力比较       \t</li>        \t<li>        \t\t增值服务       \t</li>        \t<li>        \t\t建议收集       \t</li>        \t<li>        \t\t业务拓展       \t</li></ul><p>特别说明： 当填写人每项量表题选择数字 1～3 之间时，自动弹出下列子项问题。       \t\t</p>        \t\t<p>        \t\t\t当填写人选择 4～5 时，不用弹出下列子项问题。       \t\t</p>        \t\t<p>        \t\t\t分值计算以各项量表题的得分(2 分/数字)来计算实际总分。       \t\t</p>         </div> </article>"
      }
     ]
    }
   ]
  },
  {
   "name": "page2",
   "elements": [
    {
     "type": "rating",
     "name": "question11",
     "title": "1.1 人员和设备资源配置是否满足贵司业务需求?",
     "isRequired": true,
     "minRateDescription": "不满意",
     "maxRateDescription": "满意"
    },
    {
     "type": "rating",
     "name": "question111",
     "visibleIf": "{question11} < 4",
     "indent": 2,
     "title": "1.1.1 操作部门人员配备是否合理?",
     "minRateDescription": "不满意",
     "maxRateDescription": "满意"
    },
    {
     "type": "rating",
     "name": "question112",
     "visibleIf": "{question11} < 4",
     "indent": 2,
     "title": "1.1.2 职能部门(财务开票、客户服务等)人员配备是否合理?",
     "minRateDescription": "不满意",
     "maxRateDescription": "满意"
    },
    {
      "type": "checkbox",
      "name": "question113",
      "visibleIf": "{question11} < 4",
      "indent": 2,
      "title": "1.1.3 请您勾选出未满足日常业务要求的资源?(可多选)",
      "choices": [
       "车辆资源配备",
       "仓储设备(铲车,场地等)",
       "基础办公设施(电话,传真,复印等)",
       "信息系统"
      ],
      "colCount": 1
     }
   ]
  },  
  {
   "name": "page3",
   "elements": [
    {
     "type": "rating",
     "name": "question21",
     "title": "2.1 对操作人员的服务态度和主动性是否满意?",
     "isRequired": true,
     "minRateDescription": "不满意",
     "maxRateDescription": "满意"
    },
    {
     "type": "checkbox",
     "name": "question211",
     "visibleIf": "{question21} < 4",
     "indent": 2,
     "title": "2.1.1 您对以下哪些操作人员的服务态度和主动性不满?(多选)",
     "choices": [
      "司机/调度",
      "报关员",
      "现场组板人员",
      "外贸人员",
      "结算人员",
      "业务员",
      "仓储人员"
     ],
     "colCount": 1
    },
    {
     "type": "rating",
     "name": "question212",
     "visibleIf": "{question21} < 4",
     "indent": 2,
     "title": "2.1.2 在业务操作过程中发生问题时(报关差错、货损等问题),操作人员是否主动反馈?",
     "minRateDescription": "不满意",
     "maxRateDescription": "满意"
    }
   ]
  },
  {
   "name": "page4",
   "elements": [
    {
     "type": "rating",
     "name": "question22",
     "title": "2.2 管理团队的服务态度和主动性是否满意?",
     "isRequired": true,
     "minRateDescription": "不满意",
     "maxRateDescription": "满意"
    },
    {
      "type": "checkbox",
      "name": "question221",
      "visibleIf": "{question22} < 4",
      "indent": 2,
      "title": "2.2.1 您对以下哪个操作部门的服务态度和主动性不满?(多选)",
      "choices": [
       "报关部门",
       "客服部门",
       "储运业务部",
       "航空地面服务部门",
       "进出口部门"
      ],
      "colCount": 1
    },
    {
     "type": "rating",
     "name": "question222",
     "visibleIf": "{question22} < 4",
     "indent": 2,
     "title": "2.2.2 日常沟通是否及时，客服人员是否主动拜访或联系?",
     "minRateDescription": "不满意",
     "maxRateDescription": "满意"
    },
    {
     "type": "rating",
     "name": "question223",
     "visibleIf": "{question22} < 4",
     "indent": 2,
     "title": "2.2.3 沟通过程中提出的要求和问题是否得到有效解决?",
     "minRateDescription": "不满意",
     "maxRateDescription": "满意"
    }
   ]
  },
  {
   "name": "page5",
   "elements": [
    {
     "type": "rating",
     "name": "question31",
     "title": "3.1 对服务完成的及时是否满意?",
     "isRequired": true,
     "minRateDescription": "不满意",
     "maxRateDescription": "满意"
    },
    {
     "type": "rating",
     "name": "question311",
     "visibleIf": "{question31} < 4",
     "indent": 2,
     "title": "3.1.1 约定的KPI时效是否按要求落实",
     "minRateDescription": "不满意",
     "maxRateDescription": "满意"
    },
    {
     "type": "rating",
     "name": "question312",
     "visibleIf": "{question31} < 4",
     "indent": 2,
     "title": "3.1.2 对业务完成速度(通关速度、货物交付时间等)是否满意?",
     "minRateDescription": "不满意",
     "maxRateDescription": "满意"
    }
   ]
  },
  {
   "name": "page6",
   "elements": [
    {
     "type": "rating",
     "name": "question32",
     "title": "3.2 对服务完成的准确性是否满意?",
     "isRequired": true,
     "minRateDescription": "不满意",
     "maxRateDescription": "满意"
    },
    {
     "type": "rating",
     "name": "question321",
     "visibleIf": "{question32} < 4",
     "indent": 2,
     "title": "3.2.1 业务往来过程中产生的差错是否很多?",
     "minRateDescription": "不满意",
     "maxRateDescription": "满意"
    },
    {
     "type": "rating",
     "name": "question322",
     "visibleIf": "{question32} < 4",
     "indent": 2,
     "title": "3.2.2 财务开出的发票是否准确无误?",
     "minRateDescription": "不满意",
     "maxRateDescription": "满意"
    },
    {
     "type": "rating",
     "name": "question323",
     "visibleIf": "{question32} < 4",
     "indent": 2,
     "title": "3.2.3 对国家政策法规,行业标准信息(海关政策,海关AEO认证标准等)的提供是否准确无误?",
     "minRateDescription": "不满意",
     "maxRateDescription": "满意"
    }
   ]
  },
  {
   "name": "page7",
   "elements": [
    {
     "type": "rating",
     "name": "question41",
     "title": "4.1 对业务操作中突发情况的应对处置是否满意?",
     "isRequired": true,
     "minRateDescription": "不满意",
     "maxRateDescription": "满意"
    },
    {
     "type": "checkbox",
     "name": "question411",
     "visibleIf": "{question41} < 4",
     "indent": 2,
     "title": "4.1.1 请勾选出以下应对处置中哪些方面反应不及时?(多选)",
     "choices": [
      "发生问题时的响应时间",
      "解决过程中的信息沟通",
      "提供应对措施的时间"
     ],
     "colCount": 1
    },
    {
     "type": "checkbox",
     "name": "question412",
     "visibleIf": "{question41} < 4",
     "indent": 2,
     "title": "4.1.2 请勾选出在应对措施中存在哪些不足?(多选)",
     "choices": [
      "不符合双方协议",
      "不合规的操作",
      "应对措施难以执行",
      "无法解决突发问题",
      "无法挽回不必要的损失"
     ],
     "colCount": 1
    }
   ]
  },
  {
   "name": "page8",
   "elements": [
    {
     "type": "rating",
     "name": "question51",
     "title": "5.1 客户投诉/抱怨事件处理是否及时?",
     "isRequired": true,
     "minRateDescription": "不满意",
     "maxRateDescription": "满意"
    },
    {
     "type": "rating",
     "name": "question511",
     "visibleIf": "{question51} < 4",
     "indent": 2,
     "title": "5.1.1 接报后是否主动联系,72小时内是否递交书面回复?",
     "minRateDescription": "不满意",
     "maxRateDescription": "满意"
    },
    {
     "type": "rating",
     "name": "question512",
     "visibleIf": "{question51} < 4",
     "indent": 2,
     "title": "5.1.2 一个月内是否落实回访(措施跟进及客户回访)?",
     "minRateDescription": "不满意",
     "maxRateDescription": "满意"
    }
   ]
  },
  {
   "name": "page9",
   "elements": [
    {
     "type": "rating",
     "name": "question52",
     "title": "5.2 客户投诉/抱怨事件处理后,整改措施是否有效?",
     "isRequired": true,
     "minRateDescription": "不满意",
     "maxRateDescription": "满意"
    },
    {
     "type": "rating",
     "name": "question521",
     "visibleIf": "{question52} < 4",
     "indent": 2,
     "title": "5.2.1 整改措施是否能充分解决投诉/抱怨的相关事项?",
     "minRateDescription": "不满意",
     "maxRateDescription": "满意"
    },
    {
     "type": "rating",
     "name": "question522",
     "visibleIf": "{question52} < 4",
     "indent": 2,
     "title": "5.2.2 整改措施所列内容是否全部得到落实,类似事件未再次发生?",
     "minRateDescription": "不满意",
     "maxRateDescription": "满意"
    }
   ]
  },
  {
   "name": "page10",
   "elements": [
    {
     "type": "rating",
     "name": "question61",
     "title": "6.1 是否比同行更具有竞争力优势?",
     "isRequired": true,
     "minRateDescription": "不满意",
     "maxRateDescription": "满意"
    },
    {
     "type": "rating",
     "name": "question611",
     "visibleIf": "{question61} < 4",
     "indent": 2,
     "title": "6.1.1 服务质量比同行占优势?",
     "minRateDescription": "不满意",
     "maxRateDescription": "满意"
    },
    {
     "type": "rating",
     "name": "question612",
     "visibleIf": "{question61} < 4",
     "indent": 2,
     "title": "6.1.2 服务价格比同行占优势?",
     "minRateDescription": "不满意",
     "maxRateDescription": "满意"
    },
    {
     "type": "rating",
     "name": "question613",
     "visibleIf": "{question61} < 4",
     "indent": 2,
     "title": "6.1.3 服务创新相比同行占优势?",
     "minRateDescription": "不满意",
     "maxRateDescription": "满意"
    }
   ]
  },
  {
   "name": "page11",
   "elements": [
    {
     "type": "rating",
     "name": "question71",
     "title": "7.1 提供增值服务的范围和能力?",
     "isRequired": true,
     "minRateDescription": "不满意",
     "maxRateDescription": "满意"
    },
    {
     "type": "rating",
     "name": "question711",
     "visibleIf": "{question71} < 4",
     "indent": 2,
     "title": "7.1.1 物流方案设计是否合理?",
     "minRateDescription": "不满意",
     "maxRateDescription": "满意"
    },
    {
     "type": "rating",
     "name": "question712",
     "visibleIf": "{question71} < 4",
     "indent": 2,
     "title": "7.1.2 是否帮助客户降低潜在风险?",
     "minRateDescription": "不满意",
     "maxRateDescription": "满意"
    },
    {
     "type": "rating",
     "name": "question713",
     "visibleIf": "{question71} < 4",
     "indent": 2,
     "title": "7.1.3 是否根据客户需求提供SOP以外的服务支持?",
     "minRateDescription": "不满意",
     "maxRateDescription": "满意"
    }
   ]
  },
  {
   "name": "page12",
   "elements": [
    {
     "type": "comment",
     "name": "comment",
     "title": "8 请您对我公司提供的服务以及未来发展有何意见或建议,请在以下空白处填写,感谢您的帮助!"
    }
   ]
  },
  {
   "name": "page13",
   "elements": [
    {
     "type": "checkbox",
     "name": "region",
     "title": "9 请选择需要业务拓展的地区?(可多选)",
     "choices": [
      "郑州",
      "苏州/昆山",
      "北京",
      "上海",
      "成都",
      "重庆"
     ],
     "colCount": 6
    }
   ],
   "title": "以下题目为选答题,您可以结合自身情况作答,如无需要可以跳过;您的意见将是我们的宝贵财富,也将成为我们今后发展的方向,谢谢!"
  },
  {
   "name": "page14",
   "elements": [
    {
     "type": "checkbox",
     "name": "shanghai",
     "title": "9.1 贵司可能需要我司提供的物流服务内容?(多选)—————上海",
     "commentText": "其他",
     "hasComment": true,
     "choices": [
      "口岸报关",
      "保税区/综保区报关",
      "保税仓库",
      "普货仓库",
      "零担运输",
      "整车运输",
      "全国配送",
      "多程联运",
      "航空组板",
      "浦东机场仓库至货站的短驳运输",
      "外贸代理",
      "海关AEO认证咨询服务",
      "订舱服务"
     ],
     "colCount": 1
    }
   ],
   "visibleIf": "{region} contains '上海'"
  },
  {
   "name": "page15",
   "elements": [
    {
     "type": "checkbox",
     "name": "chengdu",
     "title": "贵司可能需要我司提供的物流服务内容?(可多选)—————成都",
     "commentText": "其他",
     "hasComment": true,
     "choices": [
      "双流机场报关",
      "双流综保区报关",
      "郫县综保区报关",
      "零担运输",
      "整车运输",
      "全国配送",
      "多程联运",
      "外贸代理",
      "海关AEO认证咨询服务",
      "订舱服务"
     ],
     "colCount": 1
    }
   ],
   "visibleIf": "{region} contains '成都'"
  },
  {
    "name": "page16",
    "elements": [
     {
      "type": "checkbox",
      "name": "beijing",
      "title": "贵司可能需要我司提供的物流服务内容?(可多选)—————北京",
      "commentText": "其他",
      "hasComment": true,
      "choices": [
       "报关服务",
       "整车运输",
       "零担运输",
       "外贸代理",
       "订舱服务",
       "海关AEO认证咨询服务"
      ],
      "colCount": 1
     }
    ],
    "visibleIf": "{region} contains '北京'"
   },
   {
    "name": "page17",
    "elements": [
     {
      "type": "checkbox",
      "name": "chongqing",
      "title": "贵司可能需要我司提供的物流服务内容?(可多选)—————重庆",
      "commentText": "其他",
      "hasComment": true,
      "choices": [
       "西永保税区",
       "两路寸滩保税区",
       "整车运输",
       "零担运输",
       "全国配送",
       "多程联运",
       "订舱服务",
       "海关AEO认证咨询服务"
      ],
      "colCount": 1
     }
    ],
    "visibleIf": "{region} contains '重庆'"
   },
   {
    "name": "page18",
    "elements": [
     {
      "type": "checkbox",
      "name": "zhengzhou",
      "title": "贵司可能需要我司提供的物流服务内容?(可多选)—————郑州",
      "commentText": "其他",
      "hasComment": true,
      "choices": [
       "机场(报关,地面服务)",
       "保税区",
       "跨境电商(物流操作,电商平台)",
       "整车运输",
       "零担运输",
       "全国配送",
       "多程联运",
       "订舱服务",
       "海关AEO认证咨询服务"
      ],
      "colCount": 1
     }
    ],
    "visibleIf": "{region} contains '郑州'"
   },
   {
    "name": "page19",
    "elements": [
     {
      "type": "checkbox",
      "name": "suzhou",
      "title": "贵司可能需要我司提供的物流服务内容?(可多选)—————苏州/昆山",
      "commentText": "其他",
      "hasComment": true,
      "choices": [
       "报关服务",
       "保税区",
       "整车运输",
       "零担运输",
       "全国配送",
       "多程联运",
       "订舱服务",
       "海关AEO认证咨询服务"
      ],
      "colCount": 1
     }
    ],
    "visibleIf": "{region} contains '苏州/昆山'"
   }
 ],
 "showQuestionNumbers": "off",
 "showProgressBar": "top",
 "goNextPageAutomatic": true,
 "startSurveyText": "开始",
 "pagePrevText": "上一页",
 "pageNextText": "下一页",
 "completeText": "提交",
 "firstPageIsStarted": true,
 "showCompletedPage": false
};

  window.survey = new Survey.Model(json);
  survey.onComplete.add(function(result) {
    $.ajax({
        type: "POST",
        url: "/submit",
        data : {"score":JSON.stringify(result.data)},
        async:true,
        success: function (data) {
          if(data.code=='0'){
            location.href = "/select";
          }
        }
    });
  });
  survey.onCompleting.add(function(sender, options) {
    var total = survey.getValue("question11")*2+survey.getValue("question21")*2+survey.getValue("question22")*2+survey.getValue("question31")*2+survey.getValue("question32")*2+survey.getValue("question41")*2+survey.getValue("question51")*2+survey.getValue("question52")*2+survey.getValue("question61")*2+survey.getValue("question71")*2;
    if(!!survey.isConfirming) return;
    survey.isConfirming = true;
    options.allowComplete = false;
    myConfirm('景鸿物流www.jingh.com.cn','总分'+total+',确认提交?', function(r) {
    if(r)
      {
        survey.doComplete();
      }
      else
      {
        survey.isConfirming = false;
      }
  });
  });
  Survey.surveyStrings.progressText = "{0} of {1}";
  Survey.surveyStrings.requiredError =  "请填写此问题";
  $("#surveyElement").Survey({
    model: survey
  });

}

if (!window["%hammerhead%"]) {
  init();
}
