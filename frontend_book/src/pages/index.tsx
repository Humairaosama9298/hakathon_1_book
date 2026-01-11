import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {Redirect} from '@docusaurus/router';
import Link from '@docusaurus/Link';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  // Redirect to the docs intro page to make docs the homepage
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Physical AI & Humanoid Robotics Textbook - Spec-Driven AI-Native Technical Textbook">
      <Redirect to="/docs/intro" />
    </Layout>
  );
}
