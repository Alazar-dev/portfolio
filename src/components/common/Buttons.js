function Button({ url, title }) {
  return (
    <a className="text-white border rounded-lg p-2" href={url}>
      {title}
    </a>
  );
}

export { Button };
