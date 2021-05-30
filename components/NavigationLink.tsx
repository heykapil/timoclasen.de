import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import { forwardRef } from 'react';
interface Props {
    children: ReactNode;
    href?: string;
    target?: '_blank';
    rel?: 'noopener noreferrer' | 'noopener' | 'noreferrer';
}

export const NavigationLink = forwardRef<HTMLAnchorElement, Props>(
    function NavigationLink({ children, href, ...props }, ref) {
        const router = useRouter();
        return (
            <a
                href={href}
                ref={ref}
                className={`hover:text-highlight dark:hover:text-highlight-dark ${
                    href && router.pathname.includes(href)
                        ? 'text-highlight dark:text-highlight-dark hover:opacity-80'
                        : ''
                }`}
                {...props}>
                {children}
            </a>
        );
    }
);
