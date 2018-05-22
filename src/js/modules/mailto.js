export default ()=> {
    const $mailtos = document.querySelectorAll('.js-mailto');

    [].forEach.call($mailtos, $item => {
        const $mailtoLink = $item;
        const mailtoUser = $mailtoLink.getAttribute('data-mailto-user');
        const mailtoDomain = $mailtoLink.getAttribute('data-mailto-domain');
        $mailtoLink.href = `mailto:${mailtoUser}@${mailtoDomain}`
    });
}