import '@/styles/globals.css';

import {GeistSans} from 'geist/font/sans';
import {type Metadata} from 'next';
import {ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton} from '@clerk/nextjs';

import {zhCN} from '@clerk/localizations';
// 引入自定义翻译文件
import zhCNLocales from '@/locales/zh.json';
import merge from 'lodash.merge';
import Layout from '@/components/layout';

export const metadata: Metadata = {
    title: 'kiwi',
    description: 'Generated by create-t3-app',
    icons: [{rel: 'icon', url: '/favicon.ico'}],
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    // 合并翻译文件
    const localization = merge(zhCN, zhCNLocales);
    return (
        <ClerkProvider localization={localization}>
            <html lang="zh-CN" className={`${GeistSans.variable}`}>
                <body>
                    <Layout>{children}</Layout>
                </body>
            </html>
        </ClerkProvider>
    );
}
