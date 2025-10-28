function viewDetails(name, location, price) {
  const url = `details.html?name=${encodeURIComponent(name)}&location=${encodeURIComponent(location)}&price=${encodeURIComponent(price)}`;
  window.location.href = url;
}

