
import "./country-info.css";

export default function ShimmerForCountry() {
  return (
    <div className="container">
      <section className="more-info">
        <button className="data-shimmer" style={{width: "131px", height: "41px", border: "none"}}></button>
        <div className="information">
          <div className="image">
            <img style={{opacity: "60%", borderRadius: "4px"}} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUXFRUXFxcVFRUVFRUVFRcXFxUVFRUYHSggGB0lHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAABAAIDBv/EABoQAQEBAQEBAQAAAAAAAAAAAAABEQIS8CH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A9P5a8t+VgMThqRoAMWNIGMKMAGJYCVMQBEAgUDLQWgBrQBJEAjECSQLTRiBIHQUBxYADQoLCMQOkRGApFYYATNbFBiQtAElqBI0AEaAVRQM1YaAQIoKHEQEShoDEVAFDTNBIxADoVA1VLQWI4gbiqQKLQgMVUVgMxJAlEQCKAYGkAWFQAKRQQsK0BixaYCxRIEkgSQBJIAkgKqioJDUDtBSAWKqAFrVFQKjDEAiVUAowUBUaxQahEQKhpmglQrQOIIDixqAGYSACVQIUgBhqVASmggCiDeJKghjTPUArDzEAwwYoCoKBQhAqy1WQPJUiAArAEFaFgCEKA3FRFQS0KgqCMBI0AlixYCQQKxHEDoCsAJSEAUYAwUxUAUgUBhoM0RujAEVMNBnGWxQZtIagMiNADKkAIViBJKgtGkaBFSoCqVGwCmSDojEAUOIFUkAVIAsnEChUpAVloAYaIQZDQBnFpVBlNUAoqcGggYqAqSAUN4zgJVpmgRSKCmpSIHUY1EAxRLANFKoBEWAFhQDUkCqOigYMWqgRSKAqWkFAQBwYYgGBoAMWEaCDQwENKAKmgB+fakgdbDhooJYdQBWGIBhxKgIrCQYipkFBAxAsRxALBjUWAxjRQMxY1QAwFAsSQBYUARQDAaICorVALAdQO4sQBoCICQdAYKUASUAgoBIDiAyAyqgIiABqAIU1AFYcGAEcIM1GrAERAJJAA0LAGBvEDtjDdgwAmhgJYcGADEpAQpxYDLQw2AkMQGg0YBCIMkGAKMaowEsODACOLACIoKs2NDAIqqBJSKwAkgd6sSAKJAVQgRgQEVIAYkCZqQGVUIBTqQJVIEokCxRIECgCqQKKxIEMSBKpAIkgf//Z" />
          </div>
          <div className="data">
            <h1 className="data-shimmer" style={{width: "150px", height: "36px", borderRadius: "6px"}}></h1>
            <div className="info-and-borders">
              <div className="blocks">
                <div className="first-block">
                  <div className="data-shimmer"></div>
                  <div className="data-shimmer"></div>
                  <div className="data-shimmer"></div>
                  <div className="data-shimmer"></div>
                  <div style={{width: "180px"}} className="data-shimmer"></div>
                </div>
                <div className="second-block">
                  <div className="data-shimmer"></div>
                  <div className="data-shimmer"></div>
                  <div className="data-shimmer"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

