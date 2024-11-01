export default function Nav({ articles, setArticle, setWriting }) {
  return (
    <nav>
      <button className="new-article" onClick={() => setWriting(true)}>
        New Article
      </button>
      {!articles
        ? "No articles"
        : articles.map((a) => (
            <p key={a.id} onClick={() => setArticle(a)}>
              {a.title}
            </p>
          ))}
    </nav>
  )
}
