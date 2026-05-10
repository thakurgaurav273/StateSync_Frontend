import React from 'react'

interface IssueCardProps {
    issue: {
        id: string;
        title: string;
        description: string;
        labels: string[];
        status: 'open' | 'in_progress' | 'closed';
        assignee: string;
        createdAt: string;
        updatedAt: string;
    }
}
const IssueCard = ({ issue }: IssueCardProps) => {
    return (
        <div>
            <h2>{issue.title}</h2>
            <p>{issue.description}</p>
            <p>Status: {issue.status}</p>
            <p>Assignee: {issue.assignee}</p>
            <p>Created At: {issue.createdAt}</p>
            <p>Updated At: {issue.updatedAt}</p>
        </div>
    )
}

export default IssueCard
