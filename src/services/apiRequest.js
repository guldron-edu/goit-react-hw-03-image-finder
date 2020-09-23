export default function apiRequest(searchQuery, page) {
  return fetch(
    `https://pixabay.com/api/?key=17627070-1cea1e131d3999467dc2c3a3b&q=${searchQuery}
    &image_type=photo&orientation=horizontal&page=${page}&per_page=12`
  ).then((response) => response.json());
}
