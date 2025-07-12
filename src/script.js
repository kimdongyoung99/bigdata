document.addEventListener('DOMContentLoaded', () => {

    const expandAllButton = document.getElementById('expand-all');
    const collapseAllButton = document.getElementById('collapse-all');
    const allSessions = document.querySelectorAll('.session-card');

    // "전체 펼치기" 버튼 이벤트
    expandAllButton.addEventListener('click', () => {
        allSessions.forEach(session => {
            session.setAttribute('open', true);
        });
    });

    // "전체 접기" 버튼 이벤트
    collapseAllButton.addEventListener('click', () => {
        allSessions.forEach(session => {
            session.removeAttribute('open');
        });
    });

});