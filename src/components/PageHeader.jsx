export default function PageHeader(props) {
  return (
    <div id="pageheader-container" className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4 font-inter">
      
      {/* --- Bagian Kiri: Judul & Breadcrumb --- */}
      <div id="pageheader-left" className="flex flex-col">
        <h1 id="page-title" className="text-2xl font-bold text-gray-800 tracking-tight">
          {props.title}
        </h1>
        
        {/* Render Breadcrumb jika ada */}
        {props.breadcrumb && (
          <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-1 text-sm">
            {Array.isArray(props.breadcrumb) ? (
              props.breadcrumb.map((item, index) => (
                <span key={index} className="flex items-center space-x-2">
                  <span className={index === props.breadcrumb.length - 1 ? "text-blue-600 font-bold" : "text-gray-500"}>
                    {item}
                  </span>
                  {/* Pemisah Breadcrumb */}
                  {index < props.breadcrumb.length - 1 && <span className="text-gray-300">/</span>}
                </span>
              ))
            ) : (
              <span className="text-blue-600 font-bold">{props.breadcrumb}</span>
            )}
          </div>
        )}
      </div>

      {/* --- Bagian Kanan: Action Button (Children) --- */}
      <div id="action-button" className="flex space-x-3">
        {props.children} 
      </div>
      
    </div>
  );
}