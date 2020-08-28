export default {
  route: {
    dashboard: '首頁',
    documentation: '文件',
    guide: '指引頁',
    permission: '權限測試業',
    rolePermission: '角色權限',
    pagePermission: '頁面權限',
    directivePermission: '指令權限',
    icons: '圖標',
    components: '組件',
    tinymce: '富文本編輯器',
    markdown: 'Markdown',
    jsonEditor: 'JSON 編輯器',
    splitPane: 'Splitpane',
    avatarUpload: '頭像上傳',
    dropzone: 'Dropzone',
    sticky: 'Sticky',
    countTo: 'Count To',
    componentMixin: '小組件',
    backToTop: '返回頂部',
    draggableDialog: '可拖曳對話框',
    draggableKanban: '可拖曳看板',
    draggableList: '可拖曳列表',
    draggableSelect: '可拖曳選擇',
    charts: '圖表',
    barChart: '柱狀圖表',
    lineChart: '折線圖',
    mixedChart: '混和圖表',
    example: '綜合實例',
    nested: '路由嵌套',
    menu1: '選單 1',
    'menu1-1': '選單 1-1',
    'menu1-2': '選單 1-2',
    'menu1-2-1': '選單 1-2-1',
    'menu1-2-2': '選單 1-2-2',
    'menu1-3': '選單 1-3',
    menu2: '選單 2',
    table: '表格',
    dynamicTable: '動態表格',
    draggableTable: '可拖曳表格',
    inlineEditTable: '表格內編輯',
    complexTable: '綜合表格',
    tab: '分欄',
    form: '表單',
    createArticle: '創建文章',
    editArticle: '編輯文章',
    articleList: '文章列表',
    errorPages: '錯誤頁面',
    page401: '401',
    page404: '404',
    errorLog: '錯誤日誌',
    excel: 'Excel',
    exportExcel: '導出 Excel',
    selectExcel: '導出 已選擇項',
    mergeHeader: '導出 多級表頭',
    uploadExcel: '上傳 Excel',
    zip: 'Zip',
    pdf: 'PDF',
    exportZip: '導出 Zip',
    theme: '主題',
    clipboard: '剪貼板',
    i18n: '國際化',
    externalLink: '外部連結',
    profile: '個人資訊'
  },
  navbar: {
    logOut: '登出',
    dashboard: '首頁',
    github: '項目地址',
    theme: '主題',
    size: '布局大小',
    profile: '個人資訊'
  },
  login: {
    title: '系統登入',
    logIn: '登入',
    username: '帳號',
    password: '密碼',
    any: '隨便填',
    thirdparty: '第三方登入',
    thirdpartyTips: '本地不能模擬，請結合自己業務進行模擬！！！'
  },
  documentation: {
    documentation: '文件',
    github: 'Github 位址'
  },
  permission: {
    createRole: '新增角色',
    editPermission: '編輯權限',
    roles: '你的權限',
    switchRoles: '切換權限',
    tips: '在某些情況下，不適合使用 v-permission。例如：Element-UI 的 el-tab 或el-table-column 以及其他動態渲染 dom 的廠警。你只能通過手動設置 v-if 來實現。',
    delete: '刪除',
    confirm: '確定',
    cancel: '取消'
  },
  guide: {
    description: '引導頁對於一些第一次進入項目的人很有用，你可以簡單介紹一下項目的功能。本 Demo 是基於',
    button: '打開引導'
  },
  components: {
    documentation: '文件',
    tinymceTips:
      '富文本是管理後台一個核心的功能，但同時又是一個有很多坑的地方。在選擇富文本的過程中我也走了不少的彎路，市面上常見的富文本基本上都用過了，最終權衡了一下，選擇了 Tinymce。更詳細的富文本比較和介紹見',
    stickyTips: '當頁面滾動到預設的位置會吸附在頂部',
    backToTopTips1: '頁面滾動到指定位置會在右下角出現返回頂部按鈕',
    backToTopTips2: '可自定義按鈕的樣式、show/hide、出現的高度、返回的位置，如需文字提示，可在外部使用 Element 的 el-tooltip 元素',
    imageUploadTips: '由於我在使用它只有 vue@1 版本，而且和 mockjs 不相容，所以自己改造了一下，如果大家要使用的話，優先還是使用官方版本。'
  },
  table: {
    dynamicTips1: '固定表頭, 按照表頭順序排序',
    dynamicTips2: '不固定表頭, 按照點擊順序排序',
    dragTips1: '預設順序',
    dragTips2: '拖曳後順序',
    title: '標題',
    importance: '重要性',
    type: '類型',
    remark: '評分',
    search: '搜尋',
    add: '增加',
    export: '導出',
    reviewer: '審核人',
    id: '序號',
    date: '時間',
    author: '作者',
    readings: '閱讀數',
    status: '狀態',
    actions: '操作',
    edit: '編輯',
    publish: '發布',
    draft: '草稿',
    delete: '刪除',
    cancel: '取 消',
    confirm: '確 定'
  },
  example: {
    warning:
      '創建和編輯頁面是不能被 keep-alive 緩存的，因為 keep-alive 的 include 目前不支持根據路由來緩存，所以目前都是基於 component name 來進行緩存的。如果你想實現類似的緩存效果，可以使用 localStorage 等瀏覽器緩存方案。或者不要使用 keep-alive 的 include，直接緩存所有頁面。詳情見'
  },
  errorLog: {
    tips: '請點擊右上角 Bug 小圖示',
    description:
      '現在的管理後台基本都是 SPA 的形式了，它增強了用戶體驗，但同時也會增加頁面出問題的可能性，可能一個小小的疏忽就導致整個頁面鎖死。好在 Vue 官網提供了一個方法來捕捉異常處理，你可以在其中進行錯誤處理或異常回報。',
    documentation: '文件介紹'
  },
  excel: {
    export: '導出',
    selectedExport: '導出已選擇的項目',
    placeholder: '請輸入文件名稱(預設 excel-list)'
  },
  zip: {
    export: '導出',
    placeholder: '請輸入文件名稱(預設 file)'
  },
  pdf: {
    tips: '這裡使用 window.print() 來實現下載 PDF 的功能'
  },
  theme: {
    change: '主題',
    documentation: '主題文檔',
    tips: 'Tips: 它區別於 Navbar 上的 theme-pick, 是兩種不同的更換主題方法，各自有不同的應用場警，具體請詳閱文件。'
  },
  tagsView: {
    refresh: '重新整理',
    close: '關閉',
    closeOthers: '關閉其他',
    closeAll: '關閉所有'
  },
  settings: {
    title: '系統布局配置',
    theme: '主題色',
    showTagsView: '顯示 Tags-View',
    showSidebarLogo: '顯示側邊欄 Logo',
    fixedHeader: '固定 Header',
    sidebarTextTheme: '側邊欄文字主題色'
  }
}
