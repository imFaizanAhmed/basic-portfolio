const MEDIUM_USERNAME = "imfaizanahmed";
const MAX_BLOGS_TO_SHOW = 6;

// Using rss2json as a CORS proxy to convert RSS to JSON
const MEDIUM_RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`;

async function fetchMediumBlogs() {
  const blogsContainer = document.getElementById("blogs-container");

  try {
    const response = await fetch(MEDIUM_RSS_URL);
    const data = await response.json();

    if (data.status !== "ok") {
      throw new Error("Failed to fetch blogs");
    }

    const blogs = data.items.slice(0, MAX_BLOGS_TO_SHOW);

    if (blogs.length === 0) {
      blogsContainer.innerHTML = `
        <div class="blogs-empty">
          <p>No blogs published yet. Check back soon!</p>
        </div>
      `;
      return;
    }

    blogsContainer.innerHTML = blogs
      .map((blog, index) => createBlogCard(blog, index))
      .join("");

    // Refresh AOS animations for dynamically added content
    if (typeof AOS !== "undefined") {
      AOS.refresh();
    }
  } catch (error) {
    console.error("Error fetching Medium blogs:", error);
    blogsContainer.innerHTML = `
      <div class="blogs-error">
        <i class="fa-solid fa-exclamation-circle"></i>
        <p>Unable to load blogs. Please visit my <a href="https://medium.com/@${MEDIUM_USERNAME}" target="_blank">Medium profile</a> directly.</p>
      </div>
    `;
  }
}

function createBlogCard(blog, index) {
  const title = blog.title;
  const link = blog.link;
  const pubDate = formatDate(blog.pubDate);
  const thumbnail = extractThumbnail(blog.content, blog.thumbnail);
  const excerpt = extractExcerpt(blog.description || blog.content);
  const readTime = estimateReadTime(blog.content);

  return `
    <article class="blog-card" data-aos="fade-up" data-aos-delay="${index * 100}">
      <div class="blog-image">
        <img src="${thumbnail}" alt="${title}" onerror="this.src='img/image-not-found-icon.svg'" />
      </div>
      <div class="blog-content">
        <div class="blog-meta">
          <span class="blog-date">
            <i class="fa-regular fa-calendar"></i>
            ${pubDate}
          </span>
          <span class="blog-read-time">
            <i class="fa-regular fa-clock"></i>
            ${readTime} min read
          </span>
        </div>
        <h3 class="blog-title">${title}</h3>
        <p class="blog-excerpt">${excerpt}</p>
        <a href="${link}" target="_blank" class="blog-read-more">
          Read on Medium
          <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </article>
  `;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "short", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

function extractThumbnail(content, defaultThumbnail) {
  // Try to extract the first image from the content
  console.log("content", content);
  console.log('defaultThumbnail', defaultThumbnail);
  const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
  console.log("imgMatch", imgMatch);
  if (imgMatch && imgMatch[1]) {
    return imgMatch[1];
  }
  // Fallback to the thumbnail provided by the feed
  if (defaultThumbnail) {
    return defaultThumbnail;
  }
  // Final fallback
  return "img/image-not-found-icon.svg";
}

function extractExcerpt(content, maxLength = 150) {
  // Remove HTML tags and decode HTML entities
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = content;
  let text = tempDiv.textContent || tempDiv.innerText || "";

  // Remove "Continue reading on Medium" type text
  text = text.replace(/Continue reading on .+$/i, "").trim();

  // Truncate to maxLength
  if (text.length > maxLength) {
    text = text.substring(0, maxLength).trim() + "...";
  }

  return text;
}

function estimateReadTime(content) {
  // Remove HTML tags
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = content;
  const text = tempDiv.textContent || tempDiv.innerText || "";

  // Average reading speed: 200 words per minute
  const words = text.split(/\s+/).length;
  const readTime = Math.ceil(words / 200);

  return Math.max(1, readTime); // At least 1 minute
}

// Fetch blogs when DOM is loaded
document.addEventListener("DOMContentLoaded", fetchMediumBlogs);
