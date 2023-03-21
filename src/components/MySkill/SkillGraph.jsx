import React from 'react'

const SkillGraph = () => {
  return (
    <>
        <div className="progress-info mt-5">
                <h6 className="progress-tittle">UI/UX Design</h6>
                <div className="progress">
                    <div className="progress-bar bg-success" role="progressbar" style={{width:"80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
            </div>
            <div className="progress-info">
                <h6 className="progress-tittle">Ideas &amp; Technology</h6>
                <div className="progress">
                    <div className="progress-bar bg-success" role="progressbar" style={{width:"95%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
            </div>
            <div className="progress-info">
                <h6 className="progress-tittle">Branding Design</h6>
                <div className="progress">
                    <div className="progress-bar bg-success" role="progressbar" style={{width:"55%"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
            </div>
            <div className="progress-info mb-0">
                <h6 className="progress-tittle">Responsive Web Design</h6>
                <div className="progress">
                    <div className="progress-bar bg-success" role="progressbar" style={{width:"80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
        </div>
    </>
  )
}

export default SkillGraph