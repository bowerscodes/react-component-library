import { fireEvent, render, screen } from '@testing-library/react';
import Link, { DEFAULT_CLASS } from './Link';

describe('Link', () => {

  const checkSetup = (container: any, testId: string) => {
    const link = screen.getByTestId(testId);
    expect(link).toBeInTheDocument();
    expect(link.classList).toContain(DEFAULT_CLASS);
    expect(link.getAttribute('data-module')).toEqual(DEFAULT_CLASS);
    return link;
  }

  it('renders a link with the correct text and href', () => {
    const linkId = 'linkId';
    const linkText = 'Link Text';
    const linkHref = 'https://www.example.com/';
    const { container } = render(
      <Link data-testid={linkId} href={linkHref}>{linkText}</Link>);
    const link = checkSetup(container, linkId) as HTMLLinkElement;
    expect(link.innerHTML).toEqual(linkText);
    expect(link.href).toEqual(linkHref);
  });

  it('should appropriately handle classModifiers', () => {
    const LinkId = 'linkId';
    const linkText = 'Link Text';
    const linkHref = 'http://www.example.com/';
    const classModifiers = ['bold', 'italic'];
    const { container } = render(
      <Link data-testid={LinkId} href={linkHref} classModifiers={classModifiers}>{linkText}</Link>
    );
    const link = checkSetup(container, LinkId) as HTMLLinkElement;
    expect(link.innerHTML).toEqual(linkText);
    expect(link.href).toEqual(linkHref);
    classModifiers.forEach((modifier) => {
      expect(link.classList).toContain(`${DEFAULT_CLASS}--${modifier}`);
    });
  });

  it('should appropriately handle an onClick event when not passed an href', () => {
    const linkId = 'linkId';
    const linkText = 'Link Text';
    const onClick = jest.fn();
    const { container } = render(
      <Link data-testid={linkId} onClick={onClick}>{linkText}</Link>
    );
    const link = checkSetup(container, linkId) as HTMLLinkElement;
    expect(link.innerHTML).toEqual(linkText);
    fireEvent.click(link);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should render a link with a target attribute', () => {
    const linkId = 'linkId';
    const linkText = 'Link Text';
    const linkHref = 'http://www.example.com/';
    const linkTarget = '_blank';
    const { container } = render(
      <Link data-testid={linkId} href={linkHref} target={linkTarget}>{linkText}</Link>
    );
    const link = checkSetup(container, linkId) as HTMLLinkElement;
    expect(link.innerHTML).toEqual(linkText);
    expect(link.href).toEqual(linkHref);
    expect(link.target).toEqual(linkTarget);
  });
});
