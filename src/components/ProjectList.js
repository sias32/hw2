import React from 'react';

function ProjectList({ projects }) {
    return (
        <div className="ProjectList">
            {projects.map((img) => (
                img !== null
                ?
                <img value="test" key={img.id} src={img.img} alt={img.category}/>
                :
                null
            ))};
        </div>
    );
}

export default ProjectList;