

export const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <footer>
          <p> Shopgad © {year}</p>
    </footer>
  )
}

