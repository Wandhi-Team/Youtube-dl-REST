function getRemoteIP(request) {
    return request.header('cf-connecting-ip') || request.ip || '未知IP';
}

function getWebsiteUrl(website, id, p) {
    switch (website) {
        case 'y2b':
            return `https://youtu.be/${id}`;
        case 'bilibili':
            return `https://www.bilibili.com/video/${id}${p ? `?p=${p}` : ''}`;
        case 'xcom':
            return `https://x.com/i/status/${id}/video/${p ? p : 1}`;
    }
}

module.exports = {
    getRemoteIP,
    getWebsiteUrl,
}
