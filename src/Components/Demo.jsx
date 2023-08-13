import { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../Services/article";

const Demo = () => {
  const [article, setArticle] = useState({
    url: '',
    summary: '',
  });
  const [allArticles, setAllAtricles] = useState([]);
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();
  const [copied, setCopied] = useState("");

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(localStorage.getItem('articles'));

    if(articlesFromLocalStorage) {
      setAllAtricles(articlesFromLocalStorage);
    }
  }, [])

  const handleSubmit = async(e) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url});

    if(data?.summary) {
      const newArticle = { ...article, summary: data.summary};
      const updatedAllArticles = [newArticle, ...allArticles];

      setArticle(newArticle);
      setAllAtricles(updatedAllArticles);
      
      localStorage.setItem('articles', JSON.stringify(updatedAllArticles));
    }
  }

  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 3000);
  };
  
  const handleURLDelete = (url) => {
    setAllAtricles(oldValues => {return oldValues.filter(item => item !== url )});
    localStorage.setItem('articles', JSON.stringify(allArticles));
  }

  return (
    <section className="w-full max-w-xl mt-3">
      {/* Search */}
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex items-center justify-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 w-5 my-2 ml-3"
          />
          <input
            type="url"
            placeholder="Enter a URL"
            value={article.url}
            onChange={(e) => {setArticle({...article, url: e.target.value})}}
            required
            className="url_input peer"
          >
          </input>
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-900 peer-focus:text-gray-500"
          >
            ↵
          </button>
        </form>
        
        {/* Browse History */}
        <div className="flex flex-col gap-1 overflow-y-auto max-h-60">
          {allArticles.map((item, index) => (
            <div
              key={`link-${index}`}
              className="link_card"
            >
              <div className="copy_btn" onClick={() => handleCopy(item.url)}>
                <img
                  src={copied === item.url ? tick : copy}
                  alt={copied === item.url ? "tick_icon" : "copy_icon"}
                  className="w-[40%] h-[40%] object-contain"
                />
              </div>
              <p onClick={() => setArticle(item)} className="flex-1 text-sm font-medium text-blue-700 truncate font-satoshi">
                {item.url}
              </p>
              <div className="delete_btn" onClick={() => handleURLDelete(item)}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Display Results */}
      <div className="flex items-center justify-center max-w-full my-10">
        {isFetching ? (
          <img src={loader} alt="loader" className="object-contain w-10 h-10" />
        ) : error ? (
          <p className="font-bold text-center text-black font-inter">
            Well, that wasn't supposed to happen...
            <br />
            <span className="font-normal text-gray-700 font-satoshi">
              {error?.data?.error}
            </span>
          </p>
        ) : (
          article.summary && (
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-bold text-gray-600 font-satoshi">
                Article <span className="blue_gradient">Summary</span>
              </h2>
              <div className="summary_box">
                <p className="text-sm font-medium text-gray-700 font-inter">
                  {article.summary}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  )
}

export default Demo