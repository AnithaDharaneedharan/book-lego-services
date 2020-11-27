const { mysqlConfig } = require('../config/mysql.config');

exports.getAllBooks = (request, response) =>
  mysqlConfig.query(
    'select * from perlego_test_db.assessment2',
    (error, results) => {
      if (error) {
        console.error(error)
      }
      let res = {};
      let { searchQuery } = request.query;

      if (searchQuery) {
        searchQuery = searchQuery.trim().toLowerCase();
        const filteredResults = results.filter(
          (result) =>
            result.Title_DistinctivetitlebookCovertitle_TitleText.toLowerCase().includes(
              searchQuery
            ) ||
            result.Contributor1_PersonName.toLowerCase().includes(
              searchQuery
            ) ||
            result.Contributor2_PersonName.toLowerCase().includes(
              searchQuery
            ) ||
            result.Contributor3_PersonName.toLowerCase().includes(searchQuery)
        );

        res = {
          success: true,
          data: filteredResults,
        };
      } else {
        res = {
          success: true,
          data: results.sort((result) => result.id),
        };
      }
      response.status(200).json(res);
    }
  );
