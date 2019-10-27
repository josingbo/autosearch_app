export default (url) => {
    const regex = new RegExp("^(http|https)://", "i");
    return url.match(regex)
}