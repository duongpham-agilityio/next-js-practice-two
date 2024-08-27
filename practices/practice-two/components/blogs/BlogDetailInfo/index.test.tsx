import { render, screen } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';

// Components
import { BlogDetailInfo } from '@/components';
// Mocks
import { BLOG } from '@/mocks';

describe('BlogDetailInfo Component', () => {
  fetchMock.enableMocks();

  const blogId = 'test-blog-id';

  afterAll(() => {
    fetchMock.resetMocks();
  });

  it('renders BlogDetailHeader and BlogDetailContent with correct props', async () => {
    expect(
      render(await BlogDetailInfo({ blogId })).container,
    ).toMatchSnapshot();

    expect(screen.getByText(BLOG.author)).toBeInTheDocument();
    expect(screen.getByText(BLOG.title)).toBeInTheDocument();
    expect(screen.getByText(BLOG.body[0].subtitle)).toBeInTheDocument();
  });
});
