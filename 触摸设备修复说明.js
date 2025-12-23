// ★★★ 智能触摸检测补丁 - 解决手机"桌面模式"下双击难触发的问题 ★★★
// 将这段代码添加到 computer.html 的 <script> 标签开头

// 1. 检测设备是否支持触摸（即使在"桌面模式"下，手机仍然支持触摸事件）
const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);

console.log('设备检测:', isTouchDevice ? '触摸设备（手机/平板）' : '鼠标设备（电脑）');

// 2. 修改 renderFiles 函数中的文件绑定逻辑
// 找到这段代码：
/*
                el.ondblclick = () => openItem(key);
                el.onclick = () => {
                    document.querySelectorAll('.file-item').forEach(e => e.classList.remove('selected'));
                    el.classList.add('selected');
                };
*/

// 3. 替换为：
/*
                // 根据设备类型选择打开方式
                if (isTouchDevice) {
                    // 触摸设备：单击打开
                    el.onclick = () => {
                        document.querySelectorAll('.file-item').forEach(e => e.classList.remove('selected'));
                        el.classList.add('selected');
                        openItem(key);  // 立即打开
                    };
                } else {
                    // 鼠标设备：双击打开
                    el.ondblclick = () => openItem(key);
                    el.onclick = () => {
                        document.querySelectorAll('.file-item').forEach(e => e.classList.remove('selected'));
                        el.classList.add('selected');
                    };
                }
*/
