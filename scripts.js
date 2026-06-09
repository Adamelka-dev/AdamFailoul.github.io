body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #0f0f1a;
  color: white;
}

/* HEADER */
header {
  text-align: center;
  padding: 80px 20px;
}

header h1 {
  font-size: 3em;
}

header p {
  color: #aaa;
}

.btn {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background: #6c63ff;
  color: white;
  text-decoration: none;
  border-radius: 8px;
}

/* SECTIONS */
section {
  padding: 60px 20px;
  max-width: 1000px;
  margin: auto;
}

/* PROJECT GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.card {
  background: #1a1a2e;
  padding: 20px;
  border-radius: 12px;
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  background: #222244;
}

/* LIST */
ul {
  list-style: none;
  padding: 0;
}

ul li {
  background: #1a1a2e;
  margin: 5px 0;
  padding: 10px;
  border-radius: 8px;
}
.project-detail {
  max-width: 900px;
  margin: auto;
  padding: 40px 20px;
}

.project-detail img {
  border-radius: 10px;
}
