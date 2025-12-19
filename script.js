// 智能打开应用 - 自动适配PC和移动端
function openApp(url, width, height) {
    // 检测是否为移动设备
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
        // 移动端：直接跳转
        window.location.href = url;
    } else {
        // PC端：打开新窗口
        window.open(url, '_blank', `width=${width},height=${height},resizable=yes,scrollbars=yes`);
    }
}

// 时钟功能
setInterval(() => {
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    // 如果页面上有 clock 元素就更新它
    if (document.getElementById('clock')) {
        document.getElementById('clock').innerText = timeStr;
    }
}, 1000);