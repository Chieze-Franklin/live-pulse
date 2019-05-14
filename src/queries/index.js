import gql from "graphql-tag";

/**
 * get lists of Dashboards from an authenticated user
 */
export const DASHBOARDS_QUERY = gql`
{
  dashboards {
    id,
    title,
    icon,
    updatedAt,
    updateInterval
  }
}
`;
