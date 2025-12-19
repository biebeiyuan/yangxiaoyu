setInterval(() => {
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    // 如果页面上有 clock 元素就更新它
    if (document.getElementById('clock')) {
        document.getElementById('clock').innerText = timeStr;
    }
}, 1000);