/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HostedIdentitySessionKeyAndCertificate } from './HostedIdentitySessionKeyAndCertificate';

/**
 *
 * Request object which contains properties for P2P messaging including:
 * p2pTlsCertificateChainAlias: the P2P TLS certificate chain alias
 * useClusterLevelTlsCertificateAndKey: Should the cluster-level P2P TLS certificate type and key be
 * used or the virtual node certificate and key.
 * sessionKeyId: the session key identifier
 */
export type HostedIdentitySetupRequest = {
    p2pTlsCertificateChainAlias: string;
    sessionKeysAndCertificates: Array<HostedIdentitySessionKeyAndCertificate>;
    useClusterLevelTlsCertificateAndKey?: boolean | null;
};
