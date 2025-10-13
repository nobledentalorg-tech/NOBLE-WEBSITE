#credentials-highlight {
  background: linear-gradient(135deg, rgba(13, 148, 136, 0.12), rgba(255, 255, 255, 0.9));
  border-radius: 24px;
  padding: clamp(2rem, 5vw, 3rem);
  margin: clamp(2rem, 6vw, 4rem) auto;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12);
}

#credentials-highlight h2 {
  margin-top: 0;
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  color: #0b766d;
}

#credentials-highlight p.lead {
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: #475569;
  max-width: 680px;
}

#credentials-highlight .action-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
}

#credentials-highlight .action-row a {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.75rem 1.6rem;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
  color: #0f172a;
  background: rgba(13, 148, 136, 0.15);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

#credentials-highlight .action-row a.primary {
  background: linear-gradient(120deg, #0d9488 0%, #0b766d 100%);
  color: #fff;
  box-shadow: 0 18px 36px rgba(13, 148, 136, 0.32);
}

#credentials-highlight .action-row a:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.16);
}

#credentials-highlight ul {
  list-style: none;
  padding: 0;
  margin: 2rem 0 0;
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

#credentials-highlight li {
  background: rgba(255, 255, 255, 0.92);
  border-radius: 18px;
  padding: 1.25rem;
  box-shadow: 0 18px 28px rgba(15, 23, 42, 0.08);
  display: grid;
  gap: 0.65rem;
}

#credentials-highlight li h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #0f172a;
}

#credentials-highlight li span {
  color: #475569;
  font-size: 0.95rem;
}

#credentials-highlight li p {
  margin: 0;
  color: #1f2937;
  font-size: 0.95rem;
  line-height: 1.45;
}

#credentials-highlight .tag-chip {
  display: inline-flex;
  align-items: center;
  padding: 0.35rem 0.8rem;
  border-radius: 999px;
  background: rgba(13, 148, 136, 0.12);
  color: #0b766d;
  font-size: 0.85rem;
  font-weight: 600;
}

#credentials-highlight .news-teaser {
  background: rgba(15, 23, 42, 0.88);
  color: #e2e8f0;
  border-radius: 18px;
  padding: 1.5rem;
  display: grid;
  gap: 0.75rem;
}

#credentials-highlight .news-teaser h3 {
  margin: 0;
  color: #f1f5f9;
}

#credentials-highlight .news-teaser a {
  color: #facc15;
  font-weight: 600;
}

@media (max-width: 768px) {
  #credentials-highlight {
    border-radius: 0;
    margin: 2rem -1rem;
  }
}
