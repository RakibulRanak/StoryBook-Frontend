import React from 'react';
import { render, screen } from  '@testing-library/react'
import { StoryPreviewItem} from './StoryPreviewItem';

const testStory = {
    "id" : 0,
    "story" : "Once upon a time",
    "author" : "RakibulRanak",
    "title" : "Tiger and Lion"
}


describe('renders story preview item correctly', () => {
    test('test if the tag elements exists', async () => {
        const {getByText} = render(<StoryPreviewItem {...testStory}/>);
        expect(await screen.findByText('RakibulRanak')).toBeInTheDocument();
        const titleElement = getByText(testStory.title);
        const authorElement = getByText(testStory.author);
        const storyElement = getByText(testStory.story);
        expect(titleElement).toBeInTheDocument();
        expect(authorElement).toBeInTheDocument();
        expect(storyElement).toBeInTheDocument();
    }),
    test('test if the title and author are in proper h tags', async () => {
        const {getByText} = render(<StoryPreviewItem {...testStory}/>);
        const titleElement = getByText(testStory.title);
        const authorElement = getByText(testStory.author);
        expect(titleElement.tagName).toBe('H1');
        expect(authorElement.tagName).toBe('H2');
    });
});