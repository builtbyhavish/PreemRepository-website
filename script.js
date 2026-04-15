!function () {
  var lastScroll = 0;
  var header = document.querySelector(".main-header");

  window.addEventListener("scroll", function () {
    var pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    var headers = document.querySelectorAll(".main-header");
    if (pct >= 6) {
      headers.forEach(function(el) { el.style.color = "#FFD700"; });
    } else {
      headers.forEach(function(el) { el.style.color = "white"; });
    }

    var accent = document.querySelectorAll(".text-accent");
    if (pct >= 6) {
      accent.forEach(function(el) { el.style.color = "#FFD700"; });
    } else {
      accent.forEach(function(el) { el.style.color = "white"; });
    }

    var accent1 = document.querySelectorAll(".text-accent1");
    if (pct >= 15) {
      accent1.forEach(function(el) { el.style.color = "#FFD700"; });
    } else {
      accent1.forEach(function(el) { el.style.color = "white"; });
    }

    var accent2 = document.querySelectorAll(".text-accent2");
    if (pct >= 25) {
      accent2.forEach(function(el) { el.style.color = "#FFD700"; });
    } else {
      accent2.forEach(function(el) { el.style.color = "white"; });
    }

    var accent3 = document.querySelectorAll(".text-accent3");
    if (pct >= 30) {
      accent3.forEach(function(el) { el.style.color = "#FFD700"; });
    } else {
      accent3.forEach(function(el) { el.style.color = "white"; });
    }

    var n = window.pageYOffset || document.documentElement.scrollTop;
    if (n > 100) {
      header.style.background = "rgba(11, 11, 11, 0.95)";
      header.style.backdropFilter = "blur(15px)";
    } else {
      header.style.background = "rgba(11, 11, 11, 0.8)";
      header.style.backdropFilter = "blur(10px)";
    }
    lastScroll = n <= 0 ? 0 : n;
  });

  var observerOptions = { threshold: 0.1, rootMargin: "0px 0px -100px 0px" };
  var sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-scroll");
        sectionObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);
  document.querySelectorAll("section").forEach(function(el) { sectionObserver.observe(el); });

  document.querySelectorAll(".btn-cta, .btn-xl").forEach(function(btn) {
    btn.addEventListener("click", function (e) {
      var span = document.createElement("span");
      var rect = this.getBoundingClientRect();
      var size = Math.max(rect.width, rect.height);
      span.style.width = span.style.height = size + "px";
      span.style.left = (e.clientX - rect.left - size / 2) + "px";
      span.style.top = (e.clientY - rect.top - size / 2) + "px";
      this.appendChild(span);
      setTimeout(function() { span.remove(); }, 600);
    });
  });

  document.querySelectorAll(".card-stack").forEach(function(card) {
    card.addEventListener("mousemove", function (e) {
      var rect = this.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var cx = rect.width / 2;
      var cy = rect.height / 2;
      var rotX = (y - cy) / 10;
      var rotY = (cx - x) / 10;
      this.style.transform = "perspective(1000px) rotateX(" + rotX + "deg) rotateY(" + rotY + "deg) translateY(-8px)";
    });
    card.addEventListener("mouseleave", function () {
      this.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
    });
  });

  var imgs = document.querySelectorAll("img");
  var imgObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.animation = "fadeIn 0.6s ease-out";
        imgObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  imgs.forEach(function(img) { imgObserver.observe(img); });
}();
